type Props = {
    children?: React.ReactNode;
};

export default function Footer({ children = (<></>) }: Props) {
    const noFooterContent = <></>;
    const wrappedChildren = <div className="footerDetails centeredContent">{ children }</div>;
    const footerContent = wrappedChildren || noFooterContent;

    return (
        <footer>
            <img src="/images/logo-white.png" alt="Dovetail" width={160} /><br />
            { footerContent }
            <div className="copyright">
                © Dovetail Bar | Company No. 14991262
            </div>
        </footer>
    );
}