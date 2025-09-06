"use client";
import React from "react";
import {
  Trash2,
  Edit2,
  Check,
  X,
  MoreHorizontal,
  Clock,
  CheckCircle,
} from "lucide-react";

const ChatHistoryItem = ({
  chat,
  isActive,
  isEditing,
  editingTitle,
  onSelect,
  onDelete,
  onEdit,
  onSaveEdit,
  onCancelEdit,
  onEditTitleChange,
}) => {
  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  const hasResult = chat.result && Object.keys(chat.result).length > 0;

  return (
    <div
      className={`group relative rounded-lg transition-all duration-200 ${
        isActive
          ? "bg-blue-50 border-2 border-blue-200"
          : "hover:bg-gray-50 border-2 border-transparent"
      }`}
    >
      {/* Main Chat Item */}
      <div
        className="p-3 cursor-pointer"
        onClick={!isEditing ? onSelect : undefined}
      >
        {isEditing ? (
          /* Edit Mode */
          <div className="space-y-2">
            <input
              type="text"
              value={editingTitle}
              onChange={(e) => onEditTitleChange(e.target.value)}
              className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              autoFocus
              onKeyDown={(e) => {
                if (e.key === "Enter") onSaveEdit();
                if (e.key === "Escape") onCancelEdit();
              }}
            />
            <div className="flex items-center gap-2">
              <button
                onClick={onSaveEdit}
                className="p-1 text-green-600 hover:bg-green-100 rounded"
                title="Save"
              >
                <Check className="w-3 h-3" />
              </button>
              <button
                onClick={onCancelEdit}
                className="p-1 text-gray-600 hover:bg-gray-100 rounded"
                title="Cancel"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          </div>
        ) : (
          /* Normal Mode */
          <div className="space-y-2">
            {/* Title and Status */}
            <div className="flex items-start justify-between gap-2">
              <h4 className="text-sm font-medium text-gray-900 line-clamp-2 flex-1">
                {chat.title}
              </h4>
              <div className="flex items-center gap-1 flex-shrink-0">
                {hasResult && (
                  <CheckCircle className="w-3 h-3 text-green-500" title="Completed" />
                )}
                {/* Action Menu - visible on hover */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex items-center gap-1">
                    <button
                      onClick={onEdit}
                      className="p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded transition-colors"
                      title="Edit title"
                    >
                      <Edit2 className="w-3 h-3" />
                    </button>
                    <button
                      onClick={onDelete}
                      className="p-1 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors"
                      title="Delete chat"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Preview Text */}
            <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
              {chat.projectIdea}
            </p>

            {/* Metadata */}
            <div className="flex items-center justify-between text-xs text-gray-400">
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span>{formatTime(chat.updatedAt || chat.timestamp)}</span>
              </div>
              {hasResult && (
                <span className="text-green-500 text-xs">Generated</span>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Active Indicator */}
      {isActive && (
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600 rounded-r"></div>
      )}
    </div>
  );
};

export default ChatHistoryItem;