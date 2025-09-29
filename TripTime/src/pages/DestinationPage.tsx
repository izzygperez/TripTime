import { useParams } from "react-router-dom";
import CulturePage from "./CulturePage";
import EatDrinkPage from "./EatDrinkPage";
import ActivitiesPage from "./ActivitiesPage";

export default function DestinationPage() {
  const { country, category } = useParams();

  if (!country || !category) return <p>DEST not found</p>;

  if (category === "culture") return <CulturePage country={country} />;
  if (category === "eat-drink") return <EatDrinkPage country={country} />;
  if (category === "activities") return <ActivitiesPage country={country} />;

  return <p>Destination not found</p>;
}
