import { Navigate, useParams } from "react-router-dom";
import { Layout } from "../../components/Layout";
import { getBarData } from "../bar-data";

export default function() {
    const params = useParams();
    const data = getBarData(params.barId);

    if (!data || !data.privateHireContent) {
        return <Navigate replace to="/" />
    }

    const { heroContent, footerContent, privateHireContent } = data;

    return (        
        <Layout hero={heroContent} footerContent={footerContent}>
            { privateHireContent }
        </Layout>
    );
}
