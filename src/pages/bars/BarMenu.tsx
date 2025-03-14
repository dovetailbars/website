import { Navigate, useParams } from "react-router-dom";
import { getBarData } from "../../../data";
import BarPageLayout from "./BarPageLayout";
import MenuDisplay from "../../components/MenuDisplay";

export default function BarPage() {
	const params = useParams();
	const data = getBarData(params.barId);

	if (!data || !data.menuURL) {
		return <Navigate replace to="/cocktail-menu" />
	}

	return (
		<BarPageLayout barData={data}>
			<section className="secondary">
				<div className="centeredContent centerAligned">
					<MenuDisplay file={data.menuURL} />
				</div>
			</section>
		</BarPageLayout>
	);
}
