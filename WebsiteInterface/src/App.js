import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  Polygon,
} from "react-google-maps";

const demoDBcenters = [{ lat: 33.011912489532186, lng: -96.60436497645027 }];

const MyMapComponent = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap defaultZoom={19} center={props.center}>
      {props.isMarkerShown && (
        <>
          <Polygon
            path={[
              { lat: 33.01203778109959, lng: -96.6044553779788 },
              { lat: 33.01203103355098, lng: -96.60431053869199 },
              { lat: 33.011745386852404, lng: -96.60429980985593 },
              { lat: 33.011747636042614, lng: -96.60442855588865 },
              { lat: 33.01203778109959, lng: -96.6044553779788 },
            ]}
            options={{
              strokeColor: "#4cb5ab",
              strokeOpacity: 0.8,
              strokeWeight: 2,
              fillColor: "#4cb5ab",
              fillOpacity: 0.35,
            }}
          ></Polygon>
          <Polygon
            path={[
              { lat: 33.011997958558155, lng: -96.60375343279487 },
              { lat: 33.01199346019041, lng: -96.6035603137458 },
              { lat: 33.011801154755716, lng: -96.60354690270073 },
              { lat: 33.0118034039445, lng: -96.6037574561084 },
              { lat: 33.011997958558155, lng: -96.60375343279487 },
            ]}
            options={{
              strokeColor: "#ffac33",
              strokeOpacity: 0.8,
              strokeWeight: 2,
              fillColor: "#ffac33",
              fillOpacity: 0.35,
            }}
          ></Polygon>
          <Polygon
            path={[
              { lat: 33.01199511432054, lng: -96.60352355763638 },
              { lat: 33.011991740544644, lng: -96.60330629870617 },
              { lat: 33.01179831051174, lng: -96.60330361649716 },
              { lat: 33.0118005597006, lng: -96.60350746438229 },
              { lat: 33.01199511432054, lng: -96.60352355763638 },
            ]}
            options={{
              strokeColor: "#ffac33",
              strokeOpacity: 0.8,
              strokeWeight: 2,
              fillColor: "#ffac33",
              fillOpacity: 0.35,
            }}
          ></Polygon>
          <Polygon
            path={[{lat: 33.012028724773415, lng: -96.60503785526551},
              {lat: 33.01203378543506, lng: -96.60525109088219},
              {lat: 33.01182798496049, lng: -96.60525645530022},
              {lat: 33.01182348658409, lng: -96.60504053747452},
              {lat: 33.012028724773415, lng: -96.60503785526551}]}
            options={{
              strokeColor: "#f5554a",
              strokeOpacity: 0.8,
              strokeWeight: 2,
              fillColor: "#f5554a",
              fillOpacity: 0.35,
            }}
          ></Polygon>
        </>
      )}
    </GoogleMap>
  ))
);

export default class App extends React.PureComponent {
  state = {
    isMarkerShown: true,
    center: demoDBcenters[0],
    centers: [{ lat: 33.011912489532186, lng: -96.60436497645027 }],
    demoCrowd: 4,
    demoMask: 4
  };

  componentDidMount = () => {
    document.addEventListener("keydown", (event) => {
      if (event.keyCode == 188) this.setState({demoCrowd: this.state.demoCrowd + 1})
      if (event.keyCode == 190) this.setState({demoMask: this.state.demoMask + 1, demoCrowd: this.state.demoCrowd + 1})
    }, false);
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false });
    this.delayedShowMarker();
  };

  changeStore0 = (index) => {
    this.setState({
      center: { lat: 33.011912489532186, lng: -96.60436497645027 },
    });
  };
  changeStore1 = (index) => {
    this.setState({
      center: { lat: 33.01190236819467, lng: -96.6036488266433 },
    });
  };
  changeStore2 = (index) => {
    this.setState({
      center: { lat: 33.01190064854712, lng: -96.60341626927578},
    });
  };
  changeStore3 = (index) => {
    this.setState({
      center: { lat: 33.01193088525781, lng: -96.6051451436261 },
    });
  };
  changeStore4 = (index) => {
    this.setState({
      center: { lat: 33.011912489532186, lng: -96.60436497645027 },
    });
  };
  changeStore5 = (index) => {
    this.setState({
      center: { lat: 33.011912489532186, lng: -96.60436497645027 },
    });
  };

  render() {
    return (
      <div
        style={{ maxWidth: "100%" }}
        className="flex flex-row overflow-x-hidden h-full"
      >
        <div className="w-72 bg-white h-screen px-3 py-3">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Search stores
            </label>
            <div className="mt-1 flex rounded-md shadow-sm">
              <div className="relative flex-grow focus-within:z-10">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <input
                  id="email"
                  className="form-input block w-full rounded-none rounded-l-md pl-10 transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                  placeholder="Walmart"
                />
              </div>
              <button className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-r-md text-gray-700 bg-gray-50 hover:text-gray-500 hover:bg-white focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150">
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zm0 4a1 1 0 000 2h5a1 1 0 000-2H3zm0 4a1 1 0 100 2h4a1 1 0 100-2H3zm10 5a1 1 0 102 0v-5.586l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 101.414 1.414L13 10.414V16z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="ml-2">Sort</span>
              </button>
            </div>
          </div>
          <div
            className="col-span-1 bg-white rounded-lg shadow mt-2"
            onClick={() => this.changeStore0()}
          >
            <div className="w-full flex items-center justify-between p-6 space-x-6">
              <div className="flex-1 truncate">
                <div className="flex items-center space-x-3">
                  <h3 className="text-gray-900 text-sm leading-5 font-medium truncate">
                    DEMO STORE
                  </h3>
                </div>
                <p className="mt-1 text-gray-500 text-sm leading-5">
                  <span className="flex-shrink-0 inline-block px-2 py-0.5 text-teal-800 text-xs leading-4 font-medium bg-teal-100 rounded-full">
                    Low Crowds
                  </span>
                  <span className="flex-shrink-0 ml-2 inline-block px-2 py-0.5 text-teal-800 text-xs leading-4 font-medium bg-teal-100 rounded-full">
                    High % Masks
                  </span>
                </p>
              </div>
            </div>
            <div className="border-t border-gray-200">
              <div className="-mt-px flex">
                <div className="w-0 flex-1 flex border-r border-gray-200">
                  <a
                    href="#"
                    className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm leading-5 text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 transition ease-in-out duration-150"
                  >
                    <span className="ml-3">{this.state.demoCrowd} people in the store</span>
                  </a>
                </div>
                <div className="-ml-px w-0 flex-1 flex">
                  <a
                    href="#"
                    className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm leading-5 text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 transition ease-in-out duration-150"
                  >
                    <span className="ml-3">{Math.round(this.state.demoMask * 100 / this.state.demoCrowd)}% Wearing Masks ({this.state.demoMask}/{this.state.demoCrowd})</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-span-1 bg-white rounded-lg shadow mt-2"
            onClick={() => this.changeStore1()}
          >
            <div className="w-full flex items-center justify-between p-6 space-x-6">
              <div className="flex-1 truncate">
                <div className="flex items-center space-x-3">
                  <h3 className="text-gray-900 text-sm leading-5 font-medium truncate">
                    Smoothie Factory
                  </h3>
                </div>
                <p className="mt-1 text-gray-500 text-sm leading-5">
                  <span className="flex-shrink-0 inline-block px-2 py-0.5 text-teal-800 text-xs leading-4 font-medium bg-orange-100 rounded-full">
                    Medium Crowds
                  </span>
                  <span className="flex-shrink-0 ml-2 inline-block px-2 py-0.5 text-teal-800 text-xs leading-4 font-medium bg-teal-100 rounded-full">
                    High % Masks
                  </span>
                </p>
              </div>
            </div>
            <div className="border-t border-gray-200">
              <div className="-mt-px flex">
                <div className="w-0 flex-1 flex border-r border-gray-200">
                  <a
                    href="#"
                    className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm leading-5 text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 transition ease-in-out duration-150"
                  >
                    <span className="ml-3">8 people in the store</span>
                  </a>
                </div>
                <div className="-ml-px w-0 flex-1 flex">
                  <a
                    href="#"
                    className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm leading-5 text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 transition ease-in-out duration-150"
                  >
                    <span className="ml-3">100% Wearing Masks</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-span-1 bg-white rounded-lg shadow mt-2"
            onClick={() => this.changeStore2()}
          >
            <div className="w-full flex items-center justify-between p-6 space-x-6">
              <div className="flex-1 truncate">
                <div className="flex items-center space-x-3">
                  <h3 className="text-gray-900 text-sm leading-5 font-medium truncate">
                    Golden Chick
                  </h3>
                </div>
                <p className="mt-1 text-gray-500 text-sm leading-5">
                  <span className="flex-shrink-0 inline-block px-2 py-0.5 text-teal-800 text-xs leading-4 font-medium bg-teal-100 rounded-full">
                    Low Crowds
                  </span>
                  <span className="flex-shrink-0 ml-2 inline-block px-2 py-0.5 text-teal-800 text-xs leading-4 font-medium bg-orange-100 rounded-full">
                    Medium % Masks
                  </span>
                </p>
              </div>
            </div>
            <div className="border-t border-gray-200">
              <div className="-mt-px flex">
                <div className="w-0 flex-1 flex border-r border-gray-200">
                  <a
                    href="#"
                    className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm leading-5 text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 transition ease-in-out duration-150"
                  >
                    <span className="ml-3">5 people in the store</span>
                  </a>
                </div>
                <div className="-ml-px w-0 flex-1 flex">
                  <a
                    href="#"
                    className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm leading-5 text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 transition ease-in-out duration-150"
                  >
                    <span className="ml-3">80% Wearing Masks</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-span-1 bg-white rounded-lg shadow mt-2"
            onClick={() => this.changeStore3()}
          >
            <div className="w-full flex items-center justify-between p-6 space-x-6">
              <div className="flex-1 truncate">
                <div className="flex items-center space-x-3">
                  <h3 className="text-gray-900 text-sm leading-5 font-medium truncate">
                    Firehouse Subs
                  </h3>
                </div>
                <p className="mt-1 text-gray-500 text-sm leading-5">
                  <span className="flex-shrink-0 inline-block px-2 py-0.5 text-teal-800 text-xs leading-4 font-medium bg-teal-100 rounded-full">
                    Low Crowds
                  </span>
                  <span className="flex-shrink-0 ml-2 inline-block px-2 py-0.5 text-teal-800 text-xs leading-4 font-medium bg-red-200 rounded-full">
                    Low % Masks
                  </span>
                </p>
              </div>
            </div>
            <div className="border-t border-gray-200">
              <div className="-mt-px flex">
                <div className="w-0 flex-1 flex border-r border-gray-200">
                  <a
                    href="#"
                    className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm leading-5 text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 transition ease-in-out duration-150"
                  >
                    <span className="ml-3">3 people in the store</span>
                  </a>
                </div>
                <div className="-ml-px w-0 flex-1 flex">
                  <a
                    href="#"
                    className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm leading-5 text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 transition ease-in-out duration-150"
                  >
                    <span className="ml-3">33% Wearing Masks</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-span-1 bg-white rounded-lg shadow mt-2"
            onClick={() => this.changeStore4()}
          >
            <div className="w-full flex items-center justify-between p-6 space-x-6">
              <div className="flex-1 truncate">
                <div className="flex items-center space-x-3">
                  <h3 className="text-gray-900 text-sm leading-5 font-medium truncate">
                    RaceTrac
                  </h3>
                </div>
                <p className="mt-1 text-gray-500 text-sm leading-5">
                  <span className="flex-shrink-0 inline-block px-2 py-0.5 text-teal-800 text-xs leading-4 font-medium bg-red-200 rounded-full">
                    High Crowds
                  </span>
                  <span className="flex-shrink-0 ml-2 inline-block px-2 py-0.5 text-teal-800 text-xs leading-4 font-medium bg-orange-100 rounded-full">
                    Medium % Masks
                  </span>
                </p>
              </div>
            </div>
            <div className="border-t border-gray-200">
              <div className="-mt-px flex">
                <div className="w-0 flex-1 flex border-r border-gray-200">
                  <a
                    href="#"
                    className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm leading-5 text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 transition ease-in-out duration-150"
                  >
                    <span className="ml-3">15 people in the store</span>
                  </a>
                </div>
                <div className="-ml-px w-0 flex-1 flex">
                  <a
                    href="#"
                    className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm leading-5 text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 transition ease-in-out duration-150"
                  >
                    <span className="ml-3">76% Wearing Masks</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-span-1 bg-white rounded-lg shadow mt-2"
            onClick={() => this.changeStore5()}
          >
            <div className="w-full flex items-center justify-between p-6 space-x-6">
              <div className="flex-1 truncate">
                <div className="flex items-center space-x-3">
                  <h3 className="text-gray-900 text-sm leading-5 font-medium truncate">
                    24 Hour Fitness
                  </h3>
                </div>
                <p className="mt-1 text-gray-500 text-sm leading-5">
                  <span className="flex-shrink-0 inline-block px-2 py-0.5 text-teal-800 text-xs leading-4 font-medium bg-orange-100 rounded-full">
                    Medium Crowds
                  </span>
                  <span className="flex-shrink-0 ml-2 inline-block px-2 py-0.5 text-teal-800 text-xs leading-4 font-medium bg-red-200 rounded-full">
                    Low % Masks
                  </span>
                </p>
              </div>
            </div>
            <div className="border-t border-gray-200">
              <div className="-mt-px flex">
                <div className="w-0 flex-1 flex border-r border-gray-200">
                  <a
                    href="#"
                    className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm leading-5 text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 transition ease-in-out duration-150"
                  >
                    <span className="ml-3">13 people in the store</span>
                  </a>
                </div>
                <div className="-ml-px w-0 flex-1 flex">
                  <a
                    href="#"
                    className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm leading-5 text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 transition ease-in-out duration-150"
                  >
                    <span className="ml-3">20% Wearing Masks</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 h-full overflow-y-hidden">
          <MyMapComponent
            isMarkerShown
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC9u0a8wUPG0p0pw_Ym_pmV_gkvd1jUfIs&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100vh` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            center={this.state.center}
          />
          {/* <div
            style={{
              height: "60px",
              position: "absolute",
              bottom: "10px",
              width: "100%",
            }}
            className="justify-center flex"
          >
            <div style={{ borderRadius: "25px" }} className="p-5 bg-gray-600">
              Helo
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}
