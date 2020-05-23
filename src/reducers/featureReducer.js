import { ADD_FEATURE, REMOVE_FEATURE } from '../actions';

const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      carPrice: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };

function featureReducer(state = initialState, action) {
    switch (action.type) {
        case REMOVE_FEATURE:
          const removeID = state.car.features.findIndex(
            feature => feature.id === Number(action.payload)
          );
          return {
            car: {
              ...state.car,
              price: state.car.price -  state.car.features[removeID].price,
              features: state.car.features.filter(
                feature => feature.id !== Number(action.payload)
              )
            },
            additionalFeatures: [...state.additionalFeatures]
            };
          case ADD_FEATURE:
            const addID = state.car.features.findIndex(
              feature => feature.id === Number(action.payload)
              );
              return {
                car: {
                  ...state.car,
                  price: state.car.price + state.car.features[addID].price,
                  features: [
                    ...state.car.features,
                    {
                      feature: state.additionalFeatures[addID].name,
                      id: Date.now(),
                      price: state.additionalFeatures[addID].price
                    }
                  ]
                },
                additionalFeatures: [...state.additionalFeatures]
              };
              default:
                return state;
          }

    }

    export default featureReducer;