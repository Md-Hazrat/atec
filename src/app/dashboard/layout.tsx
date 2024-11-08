import { getSession } from "@/actions/auth.actions";
import AdminHeader from "@/components/admin/admin-header";
import { Footer } from "@/components/nav/footer";
import { redirect } from "next/navigation";
import { Metadata } from "next";
import Sidebar from "@/components/admin/sidebar";
import AdminPageWrapper from "@/components/admin/admin-page-wrapper";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "DMS | Dashboard",
  description: "Device Management System",
};

export default async function AdminLayout({
  children,
}: AdminLayoutProps): Promise<JSX.Element> {
  const session = await getSession();

  if (!session?.isLoggedIn) {
    redirect("/login");
  }

  return (
    <div className="flex flex-col overflow-hidden min-h-screen">
      <Sidebar />
      <div className="flex flex-col h-full w-full">
        <AdminHeader />
        <AdminPageWrapper>{children}</AdminPageWrapper>
      </div>
      <Footer />
    </div>
  );
}
