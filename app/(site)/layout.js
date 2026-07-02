import Header from "@/shared/components/Header";
import Footer from "@/shared/components/Footer";
import { getCurrentUser } from "@/shared/api/api-server";

export default async function BlogLayout({ children }) {
  let currentUser = null;
  try {
    const response = await getCurrentUser();
    currentUser = response?.data;
  } catch (err) {
    if (err.status === 401) {
      currentUser = null;
    } else {
      throw err;
    }
  }

  return (
    <div className="bg-gray-200">
      <Header user={currentUser} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
