import Navbar from "@shared/components/navbar"
import "./globals.css"


const RootLayout=({children }: {
    children: React.ReactNode;
}) => {
    return (
    <html lang ="en">
        <body className="relative">
        <Navbar />
        <main className="pt-20">{children}</main>
        </body>
    </html>
    );
}
export default RootLayout;