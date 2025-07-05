
"use client"
import { useSearchParams, useRouter } from 'next/navigation';
import { useState, useEffect, Suspense } from 'react';
import ResponseDisplay from '../ResponseDisplay';
import Link from 'next/link';
import { ChevronLeft, Home, MessageSquare } from 'lucide-react';

function ResultsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [roadmapData, setRoadmapData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const responseData = searchParams.get('data');
    const prompt = searchParams.get('prompt');
    
    if (responseData) {
      try {
        const decodedData = decodeURIComponent(responseData);
        setRoadmapData({
          response: decodedData,
          originalPrompt: prompt || 'Career guidance request'
        });
      } catch (error) {
        console.error('Error decoding roadmap data:', error);
        router.push('/CareerGuidance');
      }
    } else {
      // No data provided, redirect back to career guidance
      router.push('/CareerGuidance');
    }
    setIsLoading(false);
  }, [searchParams, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your personalized roadmap...</p>
        </div>
      </div>
    );
  }

  if (!roadmapData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">No Roadmap Data Found</h2>
          <p className="text-gray-600 mb-6">It looks like you haven't generated a roadmap yet.</p>
          <Link 
            href="/CareerGuidance"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <MessageSquare className="w-4 h-4 mr-2" />
            Generate New Roadmap
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link 
                href="/CareerGuidance"
                className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 mr-1" />
                <span className="font-medium">Back to Chat</span>
              </Link>
              <div className="h-6 w-px bg-gray-300"></div>
              <Link 
                href="/"
                className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Home className="w-4 h-4 mr-1" />
                <span>Home</span>
              </Link>
            </div>
            
            <div className="flex items-center space-x-3">
              <span className="text-sm text-gray-500">
                Generated for: <span className="font-medium text-gray-700">{roadmapData.originalPrompt}</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <ResponseDisplay response={roadmapData.response} />
        
        {/* Action Buttons - Mobile-first responsive */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
          <Link 
            href="/CareerGuidance"
            className="inline-flex items-center justify-center px-4 sm:px-6 py-3 sm:py-3.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm sm:text-base min-h-[48px] touch-manipulation"
          >
            <MessageSquare className="w-4 h-4 mr-2 flex-shrink-0" />
            <span>Generate Another Roadmap</span>
          </Link>
          
          <Link 
            href="/RoadmapPage"
            className="inline-flex items-center justify-center px-4 sm:px-6 py-3 sm:py-3.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium text-sm sm:text-base min-h-[48px] touch-manipulation"
          >
            <span>Explore All Roadmaps</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function RoadmapResultsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    }>
      <ResultsContent />
    </Suspense>
  );
}
