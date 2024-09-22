import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/lib/theme";
import SideBar from "@/components/molecules/sidebar";
import Box  from "@mui/material/Box";
import Navbar from "@/components/molecules/navbar";
import Divider from "@mui/material/Divider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Investment | Home",
  description: "dashboard for equity trading analysis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`h-screen w-screen antialiased overflow-hidden`}>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className="flex h-screen w-screen">
              <SideBar />
              <Box
                component={"section"}
                className="w-full flex flex-col px-3"
                sx={{
                  backgroundColor: "primary.dark",
                  color: "primary.contrastText",
                }}
              >
                <Navbar />
                <Divider orientation="horizontal" />
                {children}
              </Box>
            </div>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
