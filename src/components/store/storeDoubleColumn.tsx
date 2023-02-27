export default function StoreNavigationDoubleColumn() {
  return (
    <>
      <div className="row mt-5">
        <div className="col-12 col-lg-6 mb-4 mb-lg-0">
          <h6 className="w-100 pb-3 border-bottom">Categories</h6>
          <div className="d-flex pt-2">
            <ul className="nav flex-column ms-n3">
              <li className="nav-item">
                <a className="nav-link text-body" href="#" target="_blank">
                  Headsets
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-body" href="#" target="_blank">
                  Controllers
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-body" href="#" target="_blank">
                  Accessories
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-body" href="#" target="_blank">
                  Games
                </a>
              </li>
            </ul>
            <ul className="nav flex-column ms-6 ms-md-11 ms-lg-10">
              <li className="nav-item">
                <a className="nav-link text-body" href="#" target="_blank">
                  VR Cameras
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-body" href="#" target="_blank">
                  Mobile VR
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-body" href="#" target="_blank">
                  PC VR
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-6 col-lg-3">
          <h6 className="w-100 pb-3 border-bottom">Sales & Deals</h6>
          <ul className="nav flex-column ms-n3 pt-2">
            <li className="nav-item">
              <a className="nav-link text-body" href="#" target="_blank">
                Virtual Reality Headset Sales
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-body" href="#" target="_blank">
                Bundle Deals
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-body" href="#" target="_blank">
                Accessories Sales
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-body" href="#" target="_blank">
                Clearance Items
              </a>
            </li>
          </ul>
        </div>
        <div className="col-6 col-lg-3">
          <h6 className="w-100 pb-3 border-bottom ">Company Info</h6>
          <ul className="nav flex-column ms-n3 pt-2">
            <li className="nav-item">
              <a className="nav-link text-body" href="#" target="_blank">
                About us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-body" href="#" target="_blank">
                Shipping and Delivery
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-body" href="#" target="_blank">
                Privacy Policy
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-body" href="#" target="_blank">
                FAQ
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
