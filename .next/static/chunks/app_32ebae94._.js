(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/app/lib/firebase.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// lib/firebase.js
__turbopack_context__.s({
    "auth": (()=>auth),
    "db": (()=>db),
    "provider": (()=>provider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/app/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/app/dist/esm/index.esm2017.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$9ae71ce3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__p__as__getAuth$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/auth/dist/esm2017/index-9ae71ce3.js [app-client] (ecmascript) <export p as getAuth>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$9ae71ce3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Y__as__GoogleAuthProvider$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/auth/dist/esm2017/index-9ae71ce3.js [app-client] (ecmascript) <export Y as GoogleAuthProvider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm2017.js [app-client] (ecmascript)");
;
;
;
const firebaseConfig = {
    apiKey: "AIzaSyCw1BqUuctfKOgJXqyTLmox2qw1F0fQCKo",
    authDomain: "roadmapfinder-de61d.firebaseapp.com",
    projectId: "roadmapfinder-de61d",
    storageBucket: "roadmapfinder-de61d.firebasestorage.app",
    messagingSenderId: "813692536552",
    appId: "1:813692536552:web:9aac3d98f1ace8c257ab5d",
    measurementId: "G-16MV33H4NL"
};
// Initialize Firebase
const app = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["initializeApp"])(firebaseConfig);
// Initialize Auth
const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$9ae71ce3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__p__as__getAuth$3e$__["getAuth"])(app);
// Initialize Firestore
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFirestore"])(app);
// Configure Google provider with proper scopes and settings
const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$9ae71ce3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Y__as__GoogleAuthProvider$3e$__["GoogleAuthProvider"]();
provider.addScope('profile');
provider.addScope('email');
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/lib/auth.js [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// lib/auth.js
__turbopack_context__.s({
    "getCurrentUser": (()=>getCurrentUser),
    "handleGoogleRedirectResult": (()=>handleGoogleRedirectResult),
    "isAuthenticated": (()=>isAuthenticated),
    "loginWithEmail": (()=>loginWithEmail),
    "loginWithGoogle": (()=>loginWithGoogle),
    "loginWithGoogleRedirect": (()=>loginWithGoogleRedirect),
    "logout": (()=>logout),
    "signupWithEmail": (()=>signupWithEmail),
    "subscribeToAuthState": (()=>subscribeToAuthState)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/firebase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$9ae71ce3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ac__as__signInWithEmailAndPassword$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/auth/dist/esm2017/index-9ae71ce3.js [app-client] (ecmascript) <export ac as signInWithEmailAndPassword>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$9ae71ce3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ab__as__createUserWithEmailAndPassword$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/auth/dist/esm2017/index-9ae71ce3.js [app-client] (ecmascript) <export ab as createUserWithEmailAndPassword>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$9ae71ce3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__d__as__signInWithPopup$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/auth/dist/esm2017/index-9ae71ce3.js [app-client] (ecmascript) <export d as signInWithPopup>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$9ae71ce3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__g__as__signInWithRedirect$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/auth/dist/esm2017/index-9ae71ce3.js [app-client] (ecmascript) <export g as signInWithRedirect>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$9ae71ce3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__k__as__getRedirectResult$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/auth/dist/esm2017/index-9ae71ce3.js [app-client] (ecmascript) <export k as getRedirectResult>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$9ae71ce3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__z__as__onAuthStateChanged$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/auth/dist/esm2017/index-9ae71ce3.js [app-client] (ecmascript) <export z as onAuthStateChanged>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$9ae71ce3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__signOut$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/auth/dist/esm2017/index-9ae71ce3.js [app-client] (ecmascript) <export D as signOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$9ae71ce3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__al__as__updateProfile$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/auth/dist/esm2017/index-9ae71ce3.js [app-client] (ecmascript) <export al as updateProfile>");
;
;
const loginWithEmail = async (email, password)=>{
    try {
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$9ae71ce3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ac__as__signInWithEmailAndPassword$3e$__["signInWithEmailAndPassword"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"], email, password);
        return result;
    } catch (error) {
        console.error("Login error:", error);
        throw error;
    }
};
const signupWithEmail = async (email, password, displayName = null)=>{
    try {
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$9ae71ce3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ab__as__createUserWithEmailAndPassword$3e$__["createUserWithEmailAndPassword"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"], email, password);
        // Update display name if provided
        if (displayName && result.user) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$9ae71ce3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__al__as__updateProfile$3e$__["updateProfile"])(result.user, {
                displayName: displayName.trim()
            });
        }
        return result;
    } catch (error) {
        console.error("Signup error:", error);
        throw error;
    }
};
const loginWithGoogle = async ()=>{
    try {
        // Configure provider for better compatibility
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["provider"].setCustomParameters({
            prompt: 'select_account'
        });
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$9ae71ce3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__d__as__signInWithPopup$3e$__["signInWithPopup"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"], __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["provider"]);
        return result;
    } catch (error) {
        console.error("Google login error:", error);
        // Handle specific popup errors
        if (error.code === 'auth/popup-closed-by-user') {
            throw new Error('Sign-in was cancelled');
        } else if (error.code === 'auth/popup-blocked') {
            throw new Error('Popup was blocked. Please allow popups and try again.');
        }
        throw error;
    }
};
const loginWithGoogleRedirect = async ()=>{
    try {
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["provider"].setCustomParameters({
            prompt: 'select_account'
        });
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$9ae71ce3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__g__as__signInWithRedirect$3e$__["signInWithRedirect"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"], __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["provider"]);
    // Note: This will redirect the page, so no return value
    } catch (error) {
        console.error("Google redirect login error:", error);
        throw error;
    }
};
const handleGoogleRedirectResult = async ()=>{
    try {
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$9ae71ce3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__k__as__getRedirectResult$3e$__["getRedirectResult"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"]);
        return result; // Will be null if no redirect happened
    } catch (error) {
        console.error("Redirect result error:", error);
        throw error;
    }
};
const logout = async ()=>{
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$9ae71ce3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__signOut$3e$__["signOut"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"]);
    } catch (error) {
        console.error("Logout error:", error);
        throw error;
    }
};
const subscribeToAuthState = (callback)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$9ae71ce3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__z__as__onAuthStateChanged$3e$__["onAuthStateChanged"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"], callback);
};
const getCurrentUser = ()=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"].currentUser;
};
const isAuthenticated = ()=>{
    return !!__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"].currentUser;
};
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/lib/auth.js [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/firebase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$auth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/app/lib/auth.js [app-client] (ecmascript) <locals>");
}}),
"[project]/app/Notification/notification.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>NotificationPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$auth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/app/lib/auth.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$9ae71ce3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__z__as__onAuthStateChanged$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/auth/dist/esm2017/index-9ae71ce3.js [app-client] (ecmascript) <export z as onAuthStateChanged>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/firebase.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function NotificationPage() {
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [notifications, setNotifications] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [authChecked, setAuthChecked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [authError, setAuthError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // Default notifications data - only shown to authenticated users
    const defaultNotifications = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "NotificationPage.useMemo[defaultNotifications]": ()=>[
                {
                    id: 1,
                    type: 'course',
                    icon: '📘',
                    title: 'Advanced React Patterns',
                    message: 'New module available: "Custom Hooks for State Management"',
                    timestamp: '2 hours ago',
                    read: false,
                    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString()
                },
                {
                    id: 2,
                    type: 'roadmap',
                    icon: '🧭',
                    title: 'Full Stack Developer Roadmap',
                    message: 'Your roadmap has been updated with new Backend technologies',
                    timestamp: '1 day ago',
                    read: false,
                    createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString()
                },
                {
                    id: 3,
                    type: 'tool',
                    icon: '🛠️',
                    title: 'VS Code Extensions',
                    message: 'New recommended extensions for React development added',
                    timestamp: '3 days ago',
                    read: true,
                    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString()
                },
                {
                    id: 4,
                    type: 'doc',
                    icon: '📄',
                    title: 'TypeScript Documentation',
                    message: 'Updated guides on Advanced Types and Generics',
                    timestamp: '5 days ago',
                    read: true,
                    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString()
                },
                {
                    id: 5,
                    type: 'course',
                    icon: '⚛️',
                    title: 'Next.js Fundamentals',
                    message: 'New chapter on App Router and Server Components',
                    timestamp: '1 week ago',
                    read: false,
                    createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()
                }
            ]
    }["NotificationPage.useMemo[defaultNotifications]"], []);
    // Tab configuration
    const tabs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "NotificationPage.useMemo[tabs]": ()=>[
                {
                    id: 'all',
                    label: 'All',
                    count: 0
                },
                {
                    id: 'courses',
                    label: 'Courses',
                    count: 0
                },
                {
                    id: 'roadmaps',
                    label: 'Roadmaps',
                    count: 0
                },
                {
                    id: 'tools',
                    label: 'Tools',
                    count: 0
                },
                {
                    id: 'docs',
                    label: 'Docs',
                    count: 0
                }
            ]
    }["NotificationPage.useMemo[tabs]"], []);
    // Enhanced authentication state management
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NotificationPage.useEffect": ()=>{
            let mounted = true;
            const unsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$9ae71ce3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__z__as__onAuthStateChanged$3e$__["onAuthStateChanged"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"], {
                "NotificationPage.useEffect.unsubscribe": (currentUser)=>{
                    if (!mounted) return;
                    console.log('Auth state changed:', currentUser ? 'User logged in' : 'User logged out');
                    setUser(currentUser);
                    setAuthChecked(true);
                    setAuthError(null);
                    // Load notifications only for authenticated users
                    if (currentUser) {
                        setNotifications(defaultNotifications);
                        console.log('Notifications loaded for authenticated user');
                    } else {
                        setNotifications([]);
                        console.log('Notifications cleared - user not authenticated');
                    }
                    setIsLoading(false);
                }
            }["NotificationPage.useEffect.unsubscribe"], {
                "NotificationPage.useEffect.unsubscribe": (error)=>{
                    if (!mounted) return;
                    console.error('Authentication error:', error);
                    setAuthError(error.message);
                    setUser(null);
                    setNotifications([]);
                    setAuthChecked(true);
                    setIsLoading(false);
                }
            }["NotificationPage.useEffect.unsubscribe"]);
            // Cleanup function
            return ({
                "NotificationPage.useEffect": ()=>{
                    mounted = false;
                    if (unsubscribe) {
                        unsubscribe();
                    }
                }
            })["NotificationPage.useEffect"];
        }
    }["NotificationPage.useEffect"], [
        defaultNotifications
    ]);
    // Navigation handlers with error handling
    const handleSignup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "NotificationPage.useCallback[handleSignup]": ()=>{
            try {
                router.push('/Signup');
            } catch (error) {
                console.error('Navigation error to signup:', error);
            }
        }
    }["NotificationPage.useCallback[handleSignup]"], [
        router
    ]);
    const handleLogin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "NotificationPage.useCallback[handleLogin]": ()=>{
            try {
                router.push('/Login');
            } catch (error) {
                console.error('Navigation error to login:', error);
            }
        }
    }["NotificationPage.useCallback[handleLogin]"], [
        router
    ]);
    const handleHome = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "NotificationPage.useCallback[handleHome]": ()=>{
            try {
                router.push('/Home');
            } catch (error) {
                console.error('Navigation error to home:', error);
            }
        }
    }["NotificationPage.useCallback[handleHome]"], [
        router
    ]);
    // Enhanced notification click handler
    const handleNotificationClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "NotificationPage.useCallback[handleNotificationClick]": (notification)=>{
            if (!user) {
                console.warn('Notification clicked but user not authenticated');
                return;
            }
            const routeMap = {
                course: '/Courses',
                roadmap: '/RoadmapPage',
                tool: '/TOOLS',
                doc: '/Docs'
            };
            try {
                // Mark notification as read
                setNotifications({
                    "NotificationPage.useCallback[handleNotificationClick]": (prevNotifications)=>prevNotifications.map({
                            "NotificationPage.useCallback[handleNotificationClick]": (item)=>item.id === notification.id ? {
                                    ...item,
                                    read: true
                                } : item
                        }["NotificationPage.useCallback[handleNotificationClick]"])
                }["NotificationPage.useCallback[handleNotificationClick]"]);
                // Navigate to appropriate page
                const route = routeMap[notification.type];
                if (route) {
                    router.push(route);
                    console.log(`Navigating to ${route} for notification type: ${notification.type}`);
                } else {
                    console.warn(`No route found for notification type: ${notification.type}`);
                }
            } catch (error) {
                console.error('Error handling notification click:', error);
            }
        }
    }["NotificationPage.useCallback[handleNotificationClick]"], [
        router,
        user
    ]);
    // Mark all notifications as read
    const handleMarkAllAsRead = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "NotificationPage.useCallback[handleMarkAllAsRead]": ()=>{
            if (!user) return;
            setNotifications({
                "NotificationPage.useCallback[handleMarkAllAsRead]": (prevNotifications)=>prevNotifications.map({
                        "NotificationPage.useCallback[handleMarkAllAsRead]": (notification)=>({
                                ...notification,
                                read: true
                            })
                    }["NotificationPage.useCallback[handleMarkAllAsRead]"])
            }["NotificationPage.useCallback[handleMarkAllAsRead]"]);
            console.log('All notifications marked as read');
        }
    }["NotificationPage.useCallback[handleMarkAllAsRead]"], [
        user
    ]);
    // Enhanced timestamp formatting
    const formatTimestamp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "NotificationPage.useCallback[formatTimestamp]": (dateStr)=>{
            try {
                const date = new Date(dateStr);
                if (isNaN(date.getTime())) {
                    return 'Unknown time';
                }
                const now = new Date();
                const diffMs = now - date;
                const diffMinutes = Math.floor(diffMs / (1000 * 60));
                const diffHours = Math.floor(diffMinutes / 60);
                const diffDays = Math.floor(diffHours / 24);
                if (diffMinutes < 1) return 'Just now';
                if (diffMinutes < 60) return `${diffMinutes} minute${diffMinutes > 1 ? 's' : ''} ago`;
                if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
                if (diffDays < 7) return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
                return `${Math.floor(diffDays / 7)} week${Math.floor(diffDays / 7) > 1 ? 's' : ''} ago`;
            } catch (error) {
                console.error('Error formatting timestamp:', error);
                return 'Unknown time';
            }
        }
    }["NotificationPage.useCallback[formatTimestamp]"], []);
    // Filter notifications based on active tab
    const filteredNotifications = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "NotificationPage.useMemo[filteredNotifications]": ()=>{
            if (activeTab === 'all') return notifications;
            const typeMap = {
                'courses': 'course',
                'roadmaps': 'roadmap',
                'tools': 'tool',
                'docs': 'doc'
            };
            const targetType = typeMap[activeTab];
            return notifications.filter({
                "NotificationPage.useMemo[filteredNotifications]": (notification)=>notification.type === targetType
            }["NotificationPage.useMemo[filteredNotifications]"]);
        }
    }["NotificationPage.useMemo[filteredNotifications]"], [
        notifications,
        activeTab
    ]);
    // Calculate counts for tabs and unread notifications
    const { unreadCount, tabCounts } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "NotificationPage.useMemo": ()=>{
            const unread = notifications.filter({
                "NotificationPage.useMemo": (n)=>!n.read
            }["NotificationPage.useMemo"]).length;
            const counts = {
                all: notifications.length,
                courses: notifications.filter({
                    "NotificationPage.useMemo": (n)=>n.type === 'course'
                }["NotificationPage.useMemo"]).length,
                roadmaps: notifications.filter({
                    "NotificationPage.useMemo": (n)=>n.type === 'roadmap'
                }["NotificationPage.useMemo"]).length,
                tools: notifications.filter({
                    "NotificationPage.useMemo": (n)=>n.type === 'tool'
                }["NotificationPage.useMemo"]).length,
                docs: notifications.filter({
                    "NotificationPage.useMemo": (n)=>n.type === 'doc'
                }["NotificationPage.useMemo"]).length
            };
            return {
                unreadCount: unread,
                tabCounts: counts
            };
        }
    }["NotificationPage.useMemo"], [
        notifications
    ]);
    // User authentication status check
    const isUserAuthenticated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "NotificationPage.useMemo[isUserAuthenticated]": ()=>{
            return authChecked && user !== null;
        }
    }["NotificationPage.useMemo[isUserAuthenticated]"], [
        authChecked,
        user
    ]);
    const isUserNotAuthenticated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "NotificationPage.useMemo[isUserNotAuthenticated]": ()=>{
            return authChecked && user === null;
        }
    }["NotificationPage.useMemo[isUserNotAuthenticated]"], [
        authChecked,
        user
    ]);
    // Loading state - show while checking authentication
    if (isLoading || !authChecked) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center min-h-screen bg-gray-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-8 h-8 border-3 border-indigo-600 rounded-full animate-spin border-t-transparent"
                            }, void 0, false, {
                                fileName: "[project]/app/Notification/notification.jsx",
                                lineNumber: 269,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-indigo-700 font-medium text-lg",
                                children: "Checking authentication..."
                            }, void 0, false, {
                                fileName: "[project]/app/Notification/notification.jsx",
                                lineNumber: 270,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/Notification/notification.jsx",
                        lineNumber: 268,
                        columnNumber: 11
                    }, this),
                    authError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-red-600 text-sm text-center max-w-md",
                        children: [
                            "Authentication error: ",
                            authError
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/Notification/notification.jsx",
                        lineNumber: 273,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/Notification/notification.jsx",
                lineNumber: 267,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/Notification/notification.jsx",
            lineNumber: 266,
            columnNumber: 7
        }, this);
    }
    // NOT AUTHENTICATED - Show signup/login prompt
    if (isUserNotAuthenticated) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gray-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-3xl mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "sticky top-0 z-10 bg-white shadow-sm",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-4 py-4 border-b flex justify-between items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-xl font-bold text-gray-800",
                                    children: "Notifications"
                                }, void 0, false, {
                                    fileName: "[project]/app/Notification/notification.jsx",
                                    lineNumber: 290,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center space-x-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleLogin,
                                            className: "px-4 py-2 text-sm text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50 rounded-md transition-all duration-200",
                                            children: "Sign In"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Notification/notification.jsx",
                                            lineNumber: 292,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleSignup,
                                            className: "px-4 py-2 text-sm bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-sm",
                                            children: "Sign Up"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Notification/notification.jsx",
                                            lineNumber: 298,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Notification/notification.jsx",
                                    lineNumber: 291,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Notification/notification.jsx",
                            lineNumber: 289,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/Notification/notification.jsx",
                        lineNumber: 288,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center justify-center py-20 text-center px-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-6xl mb-6 animate-bounce",
                                children: "🔔"
                            }, void 0, false, {
                                fileName: "[project]/app/Notification/notification.jsx",
                                lineNumber: 310,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl font-bold text-gray-800 mb-4",
                                children: "Stay in the Loop!"
                            }, void 0, false, {
                                fileName: "[project]/app/Notification/notification.jsx",
                                lineNumber: 311,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 text-lg mb-2 max-w-2xl leading-relaxed",
                                children: "Get instant notifications about new courses, roadmaps, tools, and documentation updates."
                            }, void 0, false, {
                                fileName: "[project]/app/Notification/notification.jsx",
                                lineNumber: 312,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-500 text-base mb-8 max-w-md",
                                children: "Join our community to never miss important updates!"
                            }, void 0, false, {
                                fileName: "[project]/app/Notification/notification.jsx",
                                lineNumber: 315,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row gap-4 mb-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleSignup,
                                        className: "px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg",
                                        children: "🚀 Get Started - It's Free!"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Notification/notification.jsx",
                                        lineNumber: 320,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleLogin,
                                        className: "px-8 py-4 bg-white text-indigo-600 border-2 border-indigo-600 font-semibold rounded-lg hover:bg-indigo-50 transform hover:scale-105 transition-all duration-200 shadow-sm",
                                        children: "📱 Already Have Account?"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Notification/notification.jsx",
                                        lineNumber: 326,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/Notification/notification.jsx",
                                lineNumber: 319,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mt-12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-2xl mb-2",
                                                children: "📚"
                                            }, void 0, false, {
                                                fileName: "[project]/app/Notification/notification.jsx",
                                                lineNumber: 337,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-semibold text-gray-800 mb-1",
                                                children: "Course Updates"
                                            }, void 0, false, {
                                                fileName: "[project]/app/Notification/notification.jsx",
                                                lineNumber: 338,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-600",
                                                children: "New modules and lessons"
                                            }, void 0, false, {
                                                fileName: "[project]/app/Notification/notification.jsx",
                                                lineNumber: 339,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/Notification/notification.jsx",
                                        lineNumber: 336,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-2xl mb-2",
                                                children: "🗺️"
                                            }, void 0, false, {
                                                fileName: "[project]/app/Notification/notification.jsx",
                                                lineNumber: 342,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-semibold text-gray-800 mb-1",
                                                children: "Roadmap Changes"
                                            }, void 0, false, {
                                                fileName: "[project]/app/Notification/notification.jsx",
                                                lineNumber: 343,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-600",
                                                children: "Updated learning paths"
                                            }, void 0, false, {
                                                fileName: "[project]/app/Notification/notification.jsx",
                                                lineNumber: 344,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/Notification/notification.jsx",
                                        lineNumber: 341,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-2xl mb-2",
                                                children: "🛠️"
                                            }, void 0, false, {
                                                fileName: "[project]/app/Notification/notification.jsx",
                                                lineNumber: 347,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-semibold text-gray-800 mb-1",
                                                children: "New Tools"
                                            }, void 0, false, {
                                                fileName: "[project]/app/Notification/notification.jsx",
                                                lineNumber: 348,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-600",
                                                children: "Latest development resources"
                                            }, void 0, false, {
                                                fileName: "[project]/app/Notification/notification.jsx",
                                                lineNumber: 349,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/Notification/notification.jsx",
                                        lineNumber: 346,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/Notification/notification.jsx",
                                lineNumber: 335,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/Notification/notification.jsx",
                        lineNumber: 309,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed bottom-6 right-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleHome,
                            className: "p-4 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 hover:scale-110 transition-all duration-200 group",
                            "aria-label": "Go to Home",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "h-6 w-6 group-hover:scale-110 transition-transform",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                }, void 0, false, {
                                    fileName: "[project]/app/Notification/notification.jsx",
                                    lineNumber: 362,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/Notification/notification.jsx",
                                lineNumber: 361,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/Notification/notification.jsx",
                            lineNumber: 356,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/Notification/notification.jsx",
                        lineNumber: 355,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/Notification/notification.jsx",
                lineNumber: 286,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/Notification/notification.jsx",
            lineNumber: 285,
            columnNumber: 7
        }, this);
    }
    // AUTHENTICATED - Show notifications interface
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-3xl mx-auto pb-20",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "sticky top-0 z-10 bg-white shadow-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-4 py-4 border-b flex justify-between items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-xl font-bold text-gray-800",
                                            children: "Notifications"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Notification/notification.jsx",
                                            lineNumber: 379,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-500",
                                            children: [
                                                "Welcome back, ",
                                                user.displayName || user.email?.split('@')[0] || 'User',
                                                "! 👋"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/Notification/notification.jsx",
                                            lineNumber: 380,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Notification/notification.jsx",
                                    lineNumber: 378,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center space-x-3",
                                    children: [
                                        unreadCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center space-x-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800",
                                                    children: [
                                                        unreadCount,
                                                        " unread"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/Notification/notification.jsx",
                                                    lineNumber: 387,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: handleMarkAllAsRead,
                                                    className: "text-xs text-indigo-600 hover:text-indigo-800 hover:underline transition-colors",
                                                    children: "Mark all read"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Notification/notification.jsx",
                                                    lineNumber: 390,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/Notification/notification.jsx",
                                            lineNumber: 386,
                                            columnNumber: 17
                                        }, this),
                                        unreadCount === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-green-600 font-medium",
                                            children: "✅ All caught up!"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Notification/notification.jsx",
                                            lineNumber: 399,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Notification/notification.jsx",
                                    lineNumber: 384,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Notification/notification.jsx",
                            lineNumber: 377,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex overflow-x-auto",
                            children: tabs.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActiveTab(tab.id),
                                    className: `flex-1 min-w-fit px-4 py-3 text-sm font-medium transition-all duration-200 relative ${activeTab === tab.id ? 'text-indigo-600 border-b-2 border-indigo-600 bg-indigo-50' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: tab.label
                                        }, void 0, false, {
                                            fileName: "[project]/app/Notification/notification.jsx",
                                            lineNumber: 416,
                                            columnNumber: 17
                                        }, this),
                                        tabCounts[tab.id] > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "ml-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-indigo-600 bg-indigo-100 rounded-full",
                                            children: tabCounts[tab.id]
                                        }, void 0, false, {
                                            fileName: "[project]/app/Notification/notification.jsx",
                                            lineNumber: 418,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, tab.id, true, {
                                    fileName: "[project]/app/Notification/notification.jsx",
                                    lineNumber: 407,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/Notification/notification.jsx",
                            lineNumber: 405,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Notification/notification.jsx",
                    lineNumber: 376,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-4 py-2",
                    children: filteredNotifications.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center justify-center py-16 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-5xl mb-6",
                                children: "📭"
                            }, void 0, false, {
                                fileName: "[project]/app/Notification/notification.jsx",
                                lineNumber: 431,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-semibold text-gray-800 mb-3",
                                children: [
                                    "No ",
                                    activeTab !== 'all' ? activeTab.toLowerCase() : '',
                                    " notifications"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/Notification/notification.jsx",
                                lineNumber: 432,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-500 text-base max-w-md",
                                children: activeTab === 'all' ? "We'll notify you when there are new updates across all categories" : `No ${activeTab.toLowerCase()} updates at the moment. Check back later!`
                            }, void 0, false, {
                                fileName: "[project]/app/Notification/notification.jsx",
                                lineNumber: 435,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/Notification/notification.jsx",
                        lineNumber: 430,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3 pt-4",
                        children: filteredNotifications.map((notification)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "cursor-pointer group",
                                onClick: ()=>handleNotificationClick(notification),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border-l-4 group-hover:scale-[1.02] ${!notification.read ? 'border-indigo-500 bg-gradient-to-r from-indigo-50/50 to-white' : 'border-transparent hover:border-gray-200'}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-3xl mr-4 flex-shrink-0 group-hover:scale-110 transition-transform",
                                                children: notification.icon
                                            }, void 0, false, {
                                                fileName: "[project]/app/Notification/notification.jsx",
                                                lineNumber: 458,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-semibold text-gray-800 mb-2 line-clamp-1 group-hover:text-indigo-700 transition-colors",
                                                        children: notification.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Notification/notification.jsx",
                                                        lineNumber: 462,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-600 text-sm mb-3 line-clamp-2 leading-relaxed",
                                                        children: notification.message
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Notification/notification.jsx",
                                                        lineNumber: 465,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs text-gray-500 font-medium",
                                                                children: notification.timestamp || formatTimestamp(notification.createdAt)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Notification/notification.jsx",
                                                                lineNumber: 469,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity",
                                                                children: "Click to view →"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/Notification/notification.jsx",
                                                                lineNumber: 472,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/Notification/notification.jsx",
                                                        lineNumber: 468,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/Notification/notification.jsx",
                                                lineNumber: 461,
                                                columnNumber: 23
                                            }, this),
                                            !notification.read && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-shrink-0 ml-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "h-3 w-3 bg-indigo-500 rounded-full block animate-pulse"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Notification/notification.jsx",
                                                    lineNumber: 479,
                                                    columnNumber: 27
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/Notification/notification.jsx",
                                                lineNumber: 478,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/Notification/notification.jsx",
                                        lineNumber: 457,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/Notification/notification.jsx",
                                    lineNumber: 450,
                                    columnNumber: 19
                                }, this)
                            }, notification.id, false, {
                                fileName: "[project]/app/Notification/notification.jsx",
                                lineNumber: 445,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/Notification/notification.jsx",
                        lineNumber: 443,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/Notification/notification.jsx",
                    lineNumber: 428,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed bottom-6 right-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleHome,
                        className: "p-4 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 hover:scale-110 transition-all duration-200 group",
                        "aria-label": "Go to Home",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "h-6 w-6 group-hover:scale-110 transition-transform",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            }, void 0, false, {
                                fileName: "[project]/app/Notification/notification.jsx",
                                lineNumber: 498,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/Notification/notification.jsx",
                            lineNumber: 497,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/Notification/notification.jsx",
                        lineNumber: 492,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/Notification/notification.jsx",
                    lineNumber: 491,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/Notification/notification.jsx",
            lineNumber: 374,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/Notification/notification.jsx",
        lineNumber: 373,
        columnNumber: 5
    }, this);
}
_s(NotificationPage, "uuSyLDazApP79xxSPLuyXtx6VGI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = NotificationPage;
var _c;
__turbopack_context__.k.register(_c, "NotificationPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_32ebae94._.js.map