import "./globals.css";

export const metadata = {
    title: "Flytech It",
    description: "Developed By Flytech It",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
