"use client";
import React from "react";
import AppNoticeModal from "./AppNoticeModal";

export default function IOSNoticeModal({ isOpen, onClose }) {
  return <AppNoticeModal isOpen={isOpen} onClose={onClose} />;
}
