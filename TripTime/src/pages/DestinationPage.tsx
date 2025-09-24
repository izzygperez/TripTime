import { useParams } from "react-router-dom";
import CulturePage from "./CulturePage";
import EatDrinkPage from "./EatDrinkPage";
import ActivitiesPage from "./ActivitiesPage";

export default function DestinationPage() {
  const { slug } = useParams();

  if (slug === "culture") return <CulturePage />;
  if (slug === "eat-drink") return <EatDrinkPage />;
  if (slug === "activities") return <ActivitiesPage />;

  return <p>Destination not found</p>;
}