import { carList } from "./Carlist";
import { NewArrivalCars } from "./Newarrival";
import { SpecialDeal } from "./SpecialDeal";
export const AlldataItem = [...carList, ...NewArrivalCars, ...SpecialDeal];
