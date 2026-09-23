import "./globals.css";

export const metadata={
  title:{
    default:"Chibuzo Eluchie | Geologist, AI & Data Builder",
    template:"%s | Chibuzo Eluchie"
  },
  description:"Chibuzo Eluchie builds practical technology at the intersection of geology, data, artificial intelligence and African innovation.",
  keywords:["Chibuzo Eluchie","geology","artificial intelligence","AI","data","geoscience","mining technology"],
  authors:[{name:"Chibuzo Eluchie"}],
  creator:"Chibuzo Eluchie",
  robots:{index:true,follow:true},
  openGraph:{
    title:"Chibuzo Eluchie | Geologist, AI & Data Builder",
    description:"Building practical technology at the intersection of geology, data and artificial intelligence.",
    type:"website",
    locale:"en_NG"
  },
  twitter:{
    card:"summary",
    title:"Chibuzo Eluchie | Geologist, AI & Data Builder",
    description:"Building practical technology at the intersection of geology, data and artificial intelligence."
  }
};

export default function RootLayout({children}){
  return <html lang="en"><body>{children}</body></html>;
}