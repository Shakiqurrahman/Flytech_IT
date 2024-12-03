import Footer from "@/components/shared/Footer/Footer";
import Header from "@/components/shared/Header/Header";
import "./globals.css";

export const metadata = {
    title: "Flytech It",
    description: "Developed By Flytech It",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <main className="relative">
                    {/* <div class="absolute min-h-screen w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-10"></div> */}
                    {/* <div class="absolute bottom-0 right-0 top-[-10%] max-h-screen  w-full rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),#030014,rgba(255,255,255,0))]"></div> */}
                    <Header />
                    {children}
                    <Footer />
                </main>
            </body>
        </html>
    );
}
