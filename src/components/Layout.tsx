import "./Layout.css";
import Header from './Header';
import Footer from './Footer';

type Props = {
    children: React.ReactNode;
    hero?: HeroData;
    footerContent? : React.ReactNode;
    bookNowMenuItem?: boolean;
};

export function Layout({ children, hero = null, footerContent, bookNowMenuItem = true }: Props) {

    return (<>
       <Header />
        <main>
            {children}
        </main>
        <Footer>
            { footerContent || null }
        </Footer>
    </>);
}
