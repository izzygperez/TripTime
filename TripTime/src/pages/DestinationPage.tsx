import { useParams } from "react-router-dom";
import CulturePage from "./CulturePage";
import EatDrinkPage from "./EatDrinkPage";
import ActivitiesPage from "./ActivitiesPage";

export default function DestinationPage() {
  // Parses URL params to correctly route to intended page and content
  const { country, category } = useParams();
  
  // Error message if there is no country or category to be found in URL
  if (!country || !category) return <p>DEST not found</p>;

  // Content and Page routing based on what's found in URL params
  if (category === "culture") return <CulturePage country={country} />;
  if (category === "eat-drink") return <EatDrinkPage country={country} />;
  if (category === "activities") return <ActivitiesPage country={country} />;

  // Error message if country or category doesn't exist
  return <p>Destination not found</p>;
}
