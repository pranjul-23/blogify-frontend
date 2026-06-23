import Footer from "@/shared/components/Footer";
import Header from "@/shared/components/Header";

export default function BlogLayout({ children }) {
  return (
    <div className="bg-gray-200">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
