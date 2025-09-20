import { useParams } from "react-router-dom";
import CulturePage from "./CulturePage.tsx";
//import EatDrinkPage from "./EatDrinkPage.tsx";
//import ActivitiesPage from "./ActivitiesPage.tsx";

export default function DestinationPage() {
  const { slug } = useParams();

  switch (slug) {
    case "culture":
      return <CulturePage />;
    /*case "eat-drink":
      return <EatDrinkPage />;
    case "activities":
      return <ActivitiesPage />;*/
    default:
      return <h1>Page not found</h1>;
  }
}
