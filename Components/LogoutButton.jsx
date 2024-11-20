"use client";
import { logout } from "@/ApiFunctions/userServer";

export function LogoutButton({ className }) {
  async function Logout() {
    await logout();
  }

  return <button className={className} onClick={Logout}>Logout</button>;
}
