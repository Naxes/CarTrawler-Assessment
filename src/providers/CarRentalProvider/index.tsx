import getCarRentalData from '@/utils/getCarRentalData';
import React, { useEffect, useReducer, createContext } from 'react';

type State = {
  vehicles: {
    vendor: {
      name: string,
      code: string,
    },
    vehicle: {
      fuelType: string,
      doorCount: string,
      makeModel: string,
      pictureUrl: string,
      baggageQuantity: string
      transmissionType: string,
      passengerQuantity: string,
    },
    totalCharge: {
      estimatedAmountTotal: string,
    },
  }[],
  rentalCore: {
    pickUpDateTime: string,
    returnDateTime: string,
    pickUpLocation: {
      name: string,
    },
    returnLocation: {
      name: string,
    },
  },
  doorOptions: string[],
  baggageOptions: string[],
  passengerOptions: string[],
  filteredVehicles: object[],
  filters: {
    lowToHigh: boolean,
    highToLow: boolean,
    groupByVendor: string,
    groupByBaggage: string,
    groupByDoorCount: string,
    groupByPassengers: string,
  }
}

type Vehicle = {
  Vendor: {
    ['@Name']: string,
    ['@Code']: string,
  },
  VehAvails: {
    Vehicle: {
      ['@FuelType']: string,
      ['@DoorCount']: string,
      ['@BaggageQuantity']: string,
      ['@TransmissionType']: string,
      ['@PassengerQuantity']: string,
      ['PictureURL']: string,
      ['VehMakeModel']: {
        ['@Name']: string,
      },
    },
    TotalCharge: {
      ['@CurrencyCode']: string,
      ['@RateTotalAmount']: string,
      ['@EstimatedTotalAmount']: string,
    },
  }[],
};

type CarRental = {
  filters: {
    lowToHigh: boolean,
    highToLow: boolean,
    groupByVendor: string,
    groupByPassengers: string,
  }
  vehicles: {
    vendor: {
      name: string,
      code: string,
    },
    vehicle: {
      fuelType: string,
      doorCount: string,
      makeModel: string,
      pictureUrl: string,
      baggageQuantity: string
      transmissionType: string,
      passengerQuantity: string,
    },
    totalCharge: {
      estimatedAmountTotal: string,
    },
  }[],
  rentalCore: {
    pickUpDateTime: string,
    returnDateTime: string,
    pickUpLocation: {
      name: string,
    },
    returnLocation: {
      name: string,
    },
  },
  lowToHigh: () => void,
  highToLow: () => void,
  doorOptions: string[],
  baggageOptions: string[],
  passengerOptions: string[],
  groupByVendor: (value: string) => void,
  groupByBaggage: (value: string) => void,
  groupByDoorCount: (value: string) => void,
  groupByPassengers: (value: string) => void,
};

enum ActionType {
  SET_VEHICLES = 'SET_VEHICLES',
  SET_RENTAL_CORE = 'SET_RENTAL_CORE',
  GROUP_BY_VENDOR = 'GROUP_BY_VENDOR',
  GROUP_BY_BAGGAGE = 'GROUP_BY_BAGGAGE',
  SET_DOOR_OPTIONS = 'SET_DOOR_OPTIONS',
  SORT_BY_LOW_TO_HIGH = 'SORT_BY_LOW_TO_HIGH',
  SORT_BY_HIGH_TO_LOW = 'SORT_BY_HIGH_TO_LOW',
  GROUP_BY_PASSENGERS = 'GROUP_BY_PASSENGERS',
  GROUP_BY_DOOR_COUNT = 'GROUP_BY_DOOR_COUNT',
  SET_BAGGAGE_OPTIONS = 'SET_BAGGAGE_OPTIONS',
  SET_PASSENGER_OPTIONS = 'SET_PASSENGER_OPTIONS',
}

type Action =
  | { type: ActionType.SORT_BY_LOW_TO_HIGH; }
  | { type: ActionType.SORT_BY_HIGH_TO_LOW; }
  | { type: ActionType.SET_VEHICLES; value: any[] }
  | { type: ActionType.SET_RENTAL_CORE; value: any }
  | { type: ActionType.GROUP_BY_VENDOR; value: string }
  | { type: ActionType.GROUP_BY_BAGGAGE; value: string }
  | { type: ActionType.GROUP_BY_DOOR_COUNT; value: string }
  | { type: ActionType.GROUP_BY_PASSENGERS; value: string }
  | { type: ActionType.SET_DOOR_OPTIONS; value: string[] }
  | { type: ActionType.SET_BAGGAGE_OPTIONS; value: string[] }
  | { type: ActionType.SET_PASSENGER_OPTIONS; value: string[] }

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case ActionType.SET_VEHICLES:
      return { ...state, vehicles: action.value };
    case ActionType.SET_RENTAL_CORE:
      return { ...state, rentalCore: action.value };
    case ActionType.SET_DOOR_OPTIONS:
      return { ...state, doorOptions: action.value };
    case ActionType.SET_BAGGAGE_OPTIONS:
      return { ...state, baggageOptions: action.value };
    case ActionType.SET_PASSENGER_OPTIONS:
      return { ...state, passengerOptions: action.value };
    case ActionType.SORT_BY_LOW_TO_HIGH:
      return {
        ...state,
        filters: {
          ...state.filters,
          highToLow: false,
          lowToHigh: !state.filters.lowToHigh,
        }
      };
    case ActionType.SORT_BY_HIGH_TO_LOW:
      return {
        ...state,
        filters: {
          ...state.filters,
          lowToHigh: false,
          highToLow: !state.filters.highToLow,
        }
      };
    case ActionType.GROUP_BY_VENDOR:
      return {
        ...state,
        filters: {
          ...state.filters,
          groupByVendor: action.value,
        },
      };
    case ActionType.GROUP_BY_DOOR_COUNT:
      return {
        ...state,
        filters: {
          ...state.filters,
          groupByDoorCount: action.value,
        },
      };
    case ActionType.GROUP_BY_BAGGAGE:
      return {
        ...state,
        filters: {
          ...state.filters,
          groupByBaggage: action.value,
        },
      };
    case ActionType.GROUP_BY_PASSENGERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          groupByPassengers: action.value,
        },
      };
    default:
      return state;
  }
}

interface Props {
  children: JSX.Element,
}

const CarRentalProvider = ({ children }: Props) => {
  const initialState: State = {
    vehicles: [],
    rentalCore: {
      pickUpDateTime: '',
      returnDateTime: '',
      pickUpLocation: {
        name: '',
      },
      returnLocation: {
        name: '',
      },
    },
    doorOptions: [],
    baggageOptions: [],
    passengerOptions: [],
    filteredVehicles: [],
    filters: {
      lowToHigh: true, // Sort by price ASC by default
      highToLow: false,
      groupByVendor: '',
      groupByBaggage: '',
      groupByDoorCount: '',
      groupByPassengers: '',
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    getCarRentalData().then((res) => {
      const {
        VehAvailRSCore: {
          VehRentalCore,
          VehVendorAvails,
        }
      } = res;

      /**
       * Formatting data
       */
      const vehicles = [].concat(...VehVendorAvails.map(
        ({ Vendor, VehAvails }: Vehicle) => VehAvails.map(
          ({ Vehicle, TotalCharge }) => ({
            vendor: {
              name: Vendor['@Name'],
              code: Vendor['@Code'],
            },
            vehicle: {
              fuelType: Vehicle['@FuelType'],
              doorCount: Vehicle['@DoorCount'],
              pictureUrl: Vehicle['PictureURL'],
              makeModel: Vehicle['VehMakeModel']['@Name'],
              baggageQuantity: Vehicle['@BaggageQuantity'],
              transmissionType: Vehicle['@TransmissionType'],
              passengerQuantity: Vehicle['@PassengerQuantity'],
            },
            totalCharge: {
              currencyCode: TotalCharge['@CurrencyCode'],
              rateAmountTotal: TotalCharge['@RateTotalAmount'],
              estimatedAmountTotal: TotalCharge['@EstimatedTotalAmount'],
            },
          }))));

      const rentalCore = {
        pickUpDateTime: VehRentalCore['@PickUpDateTime'],
        returnDateTime: VehRentalCore['@ReturnDateTime'],
        pickUpLocation: {
          name: VehRentalCore['PickUpLocation']['@Name'],
        },
        returnLocation: {
          name: VehRentalCore['ReturnLocation']['@Name'],
        },
      };

      /**
       * All options for door quantity
       */
      const doorOptions = [...new Set(vehicles.map(
        ({ vehicle: { baggageQuantity } }) => baggageQuantity).sort()
      )];

      /**
       * All options for baggage capacity
       */
      const baggageOptions = [...new Set(vehicles.map(
        ({ vehicle: { baggageQuantity } }) => baggageQuantity).sort()
      )];

      /**
       * All options for passenger capacity
       */
      const passengerOptions = [...new Set(vehicles.map(
        ({ vehicle: { passengerQuantity } }) => passengerQuantity).sort()
      )];

      dispatch({ type: ActionType.SET_DOOR_OPTIONS, value: doorOptions });
      dispatch({ type: ActionType.SET_BAGGAGE_OPTIONS, value: baggageOptions });
      dispatch({ type: ActionType.SET_PASSENGER_OPTIONS, value: passengerOptions });
      dispatch({ type: ActionType.SET_RENTAL_CORE, value: rentalCore });
      dispatch({ type: ActionType.SET_VEHICLES, value: vehicles });
    });
  }, []);

  /**
   * Filter vehicles by price ASC
   * @param vehicles
   */
  function lowToHigh(vehicles: any[]) {
    return vehicles.sort(
      (a, b) => a.totalCharge.estimatedAmountTotal
        - b.totalCharge.estimatedAmountTotal
    );
  }

  /**
   * Filter vehicles by price DESC
   * @param vehicles
   */
  function highToLow(vehicles: any[]) {
    return vehicles.sort(
      (a, b) => b.totalCharge.estimatedAmountTotal
        - a.totalCharge.estimatedAmountTotal
    );
  }

  /**
   * Filter vehicles by vendor
   * name (e.g. ALAMO, AVIS, HERTZ)
   * @param vehicles
   */
  function groupByVendor(vehicles: any[]) {
    const { filters } = state;
    const validVendor = vehicles.some(
      ({ vendor }) => vendor.name === filters.groupByVendor
    );

    if (validVendor) {
      return vehicles.filter(
        ({ vendor }) => vendor.name === filters.groupByVendor
      );
    }

    return vehicles;
  }

  /**
   * Filter vehicles by door
   * quantity
   * @param vehicles
   */
  function groupByDoorCount(vehicles: any[]) {
    const { filters, doorOptions } = state;
    const validOption = doorOptions.includes(filters.groupByDoorCount);

    if (validOption) {
      return vehicles.filter(
        ({ vehicle }) => vehicle.doorCount === filters.groupByDoorCount,
      );
    }

    return vehicles;
  }

  /**
   * Filter vehicles by baggage
   * quantity
   * @param vehicles
   */
  function groupByBaggage(vehicles: any[]) {
    const { filters, baggageOptions } = state;
    const validOption = baggageOptions.includes(filters.groupByBaggage);

    if (validOption) {
      return vehicles.filter(
        ({ vehicle }) => vehicle.baggageQuantity === filters.groupByBaggage,
      );
    }

    return vehicles;
  }

  /**
   * Filter vehicles by passenger
   * quantity
   * @param vehicles
   */
  function groupByPassengers(vehicles: any[]) {
    const { filters, passengerOptions } = state;
    const validOption = passengerOptions.includes(filters.groupByPassengers);

    if (validOption) {
      return vehicles.filter(
        ({ vehicle }) => vehicle.passengerQuantity === filters.groupByPassengers,
      );
    }

    return vehicles;
  }

  /**
   * Apply filters based on toggled states
   */
  function filterVehicles() {
    let { filters, vehicles } = state;
    vehicles = vehicles.slice();

    if (filters.lowToHigh) vehicles = lowToHigh(vehicles);
    if (filters.highToLow) vehicles = highToLow(vehicles);
    if (filters.groupByVendor) vehicles = groupByVendor(vehicles);
    if (filters.groupByBaggage) vehicles = groupByBaggage(vehicles);
    if (filters.groupByDoorCount) vehicles = groupByDoorCount(vehicles);
    if (filters.groupByPassengers) vehicles = groupByPassengers(vehicles);

    return vehicles;
  }

  return (
    <CarRentalContext.Provider
      value={{
        filters: state.filters,
        vehicles: filterVehicles(),
        rentalCore: state.rentalCore,
        doorOptions: state.doorOptions,
        baggageOptions: state.baggageOptions,
        passengerOptions: state.passengerOptions,
        lowToHigh: () => dispatch({ type: ActionType.SORT_BY_LOW_TO_HIGH }),
        highToLow: () => dispatch({ type: ActionType.SORT_BY_HIGH_TO_LOW }),
        groupByVendor: (value: string) => dispatch({ type: ActionType.GROUP_BY_VENDOR, value }),
        groupByBaggage: (value: string) => dispatch({ type: ActionType.GROUP_BY_BAGGAGE, value }),
        groupByDoorCount: (value: string) => dispatch({ type: ActionType.GROUP_BY_DOOR_COUNT, value }),
        groupByPassengers: (value: string) => dispatch({ type: ActionType.GROUP_BY_PASSENGERS, value }),
      }}
    >
      {children}
    </CarRentalContext.Provider>
  );
}

export default CarRentalProvider;
export const CarRentalContext = createContext<CarRental>({} as CarRental);
