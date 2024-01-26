import { useState } from "react";
import { Link } from "react-router-dom";
import "./aside.scss";
import Header from "../header/Header";
const Aside = () => {
  const [dark, setDark] = useState<boolean>(false);
  const [link1, setLink1] = useState<boolean>(false);
  const [link2, setLink2] = useState<boolean>(false);
  const [link3, setLink3] = useState<boolean>(false);
  const [link4, setLink4] = useState<boolean>(false);
  const [link5, setLink5] = useState<boolean>(false);
  const [link6, setLink6] = useState<boolean>(false);
  const getSignInFullName = JSON.parse(localStorage.getItem("registerValues")!);
  return (
    <div>
      <Header />
      <section className="sidebar">
        <div className="side-wrap">
          <div className="block-1">
            <span></span>
            <h4>CRUD OPERATIONS</h4>
          </div>
          <div className="block-2">
            <img src="/sidebar/user.png" alt="" />
            <h3>{getSignInFullName.fullName}</h3>
            <p>Admin</p>
          </div>
          <div className="block-3">
            <Link
              to="/home"
              className="links"
              onClick={() => {
                setLink1(true);
                setLink2(false);
                setLink3(false);
                setLink4(false);
                setLink5(false);
                setLink6(false);
              }}
              style={
                link1
                  ? { backgroundColor: "#e6bd1c" }
                  : { backgroundColor: "transparent" }
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="17"
                viewBox="0 0 19 17"
                fill="none"
              >
                <g path="url(#clip0_17_24)">
                  <path
                    d="M18.9171 7.30102L10.2457 0.264952C10.035 0.0927557 9.77185 -0.00123024 9.50042 -0.00123024C9.229 -0.00123024 8.96583 0.0927557 8.7551 0.264952L0.0837115 7.30102C0.060804 7.31944 0.0417585 7.34225 0.0276807 7.36813C0.0136029 7.39401 0.00477327 7.42245 0.00170444 7.4518C-0.00136439 7.48114 0.00138873 7.51081 0.00980395 7.53908C0.0182192 7.56734 0.0321288 7.59364 0.0507254 7.61645L0.519128 8.19751C0.537742 8.22064 0.560703 8.23984 0.586698 8.25403C0.612693 8.26822 0.641212 8.27711 0.670623 8.28019C0.700034 8.28328 0.729761 8.28049 0.758103 8.272C0.786444 8.26351 0.812845 8.24948 0.835795 8.23071L2.11137 7.19511V16.4681C2.11137 16.609 2.16697 16.7441 2.26595 16.8437C2.36493 16.9434 2.49917 16.9993 2.63915 16.9993H16.3614C16.5013 16.9993 16.6356 16.9434 16.7346 16.8437C16.8335 16.7441 16.8891 16.609 16.8891 16.4681V7.19843L18.169 8.23735C18.2154 8.27518 18.2748 8.29292 18.3342 8.2867C18.3935 8.28047 18.448 8.25078 18.4857 8.20415L18.9538 7.6231C18.9894 7.57477 19.0055 7.51459 18.9987 7.45478C18.9919 7.39496 18.9627 7.33999 18.9171 7.30102ZM7.91692 15.9368V10.6243H11.0836V15.9368H7.91692ZM15.8336 15.9368H12.1391V10.0931C12.1391 9.95218 12.0835 9.81705 11.9846 9.71743C11.8856 9.6178 11.7513 9.56183 11.6114 9.56183H7.38915C7.24917 9.56183 7.11493 9.6178 7.01595 9.71743C6.91697 9.81705 6.86137 9.95218 6.86137 10.0931V15.9368H3.16692V6.33847L9.35875 1.31151C9.39783 1.27931 9.44678 1.26171 9.49729 1.26171C9.5478 1.26171 9.59675 1.27931 9.63583 1.31151L15.8336 6.34112V15.9368Z"
                    fill="black"
                  />
                </g>
                <defs>
                  {/* <clipPath id="clip0_17_24">
                    <rect width="19" height="17" fill="white" />
                  </clipPath> */}
                </defs>
              </svg>
              <p>Home</p>
            </Link>
            <Link
              to="/home"
              className="links"
              onClick={() => {
                setLink1(false);
                setLink2(true);
                setLink3(false);
                setLink4(false);
                setLink5(false);
                setLink6(false);
              }}
              style={
                link2
                  ? { backgroundColor: "#e6bd1c" }
                  : { backgroundColor: "transparent" }
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="15"
                viewBox="0 0 12 15"
                fill="none"
              >
                <g path="url(#clip0_17_26)">
                  <path
                    d="M1.5 0H10.5C11.3284 0 12 0.62959 12 1.40625V15L6 11.7188L0 15V1.40625C0 0.62959 0.671562 0 1.5 0ZM1 13.3678L6 10.6334L11 13.3678V1.40625C11 1.14779 10.7757 0.9375 10.5 0.9375H1.5C1.22431 0.9375 1 1.14779 1 1.40625V13.3678Z"
                    fill="black"
                  />
                </g>
                <defs>
                  {/* <clipPath id="clip0_17_26">
                    <rect
                      width="12"
                      height="15"
                      fill="white"
                      transform="matrix(-1 0 0 1 12 0)"
                    />
                  </clipPath> */}
                </defs>
              </svg>
              <p>Sourse</p>
            </Link>
            <Link
              to="/students"
              className="links"
              onClick={() => {
                setLink1(false);
                setLink2(false);
                setLink3(true);
                setLink4(false);
                setLink5(false);
                setLink6(false);
              }}
              style={
                link3
                  ? { backgroundColor: "#e6bd1c" }
                  : { backgroundColor: "transparent" }
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="16"
                viewBox="0 0 20 16"
                fill="none"
              >
                <path
                  d="M19.13 4.81219L10.8488 2.13469C10.2922 1.955 9.70813 1.955 9.15156 2.13469L0.870313 4.81219C0.341875 4.98313 0 5.44938 0 6C0 6.55063 0.341875 7.01688 0.87 7.18781L1.79844 7.48781C1.69531 7.68094 1.61906 7.88875 1.56938 8.10656C1.23531 8.26844 1 8.60375 1 9C1 9.39781 1.23656 9.735 1.57281 9.89594L1.00875 13.3916C0.958437 13.7038 1.13094 14 1.36312 14H2.63656C2.86875 14 3.04156 13.7038 2.99094 13.3916L2.42719 9.89594C2.76344 9.735 3 9.39781 3 9C3 8.66875 2.82844 8.38938 2.58031 8.20719C2.62687 8.06156 2.69906 7.93031 2.78562 7.80688L4.45656 8.34719L4 12C4 13.1047 6.68625 14 10 14C13.3138 14 16 13.1047 16 12L15.5434 8.34719L19.13 7.1875C19.6581 7.01688 20 6.55063 20 6C20 5.44938 19.6581 4.98313 19.13 4.81219ZM14.9838 11.9331C14.6475 12.2872 12.9388 13 10 13C7.06125 13 5.3525 12.2872 5.01625 11.9331L5.42531 8.66031L9.15156 9.865C9.23281 9.89125 9.95531 10.1534 10.8488 9.865L14.575 8.66031L14.9838 11.9331ZM18.8213 6.23688L10.54 8.91438C10.1866 9.02875 9.81344 9.02875 9.46 8.91438L3.97031 7.13938L10.0919 5.99125C10.3634 5.94063 10.5422 5.67938 10.4913 5.40781C10.4406 5.13594 10.1737 4.95813 9.90812 5.00875L3.54 6.2025C3.1525 6.275 2.80531 6.44156 2.50625 6.66594L1.17844 6.23656C0.933125 6.15688 0.945312 5.83844 1.17844 5.76313L9.45969 3.08563C9.93156 2.93313 10.3297 3.01781 10.5397 3.08563L18.8209 5.76313C19.0519 5.83781 19.0681 6.15688 18.8213 6.23688Z"
                  fill="black"
                />
              </svg>
              <p>Students</p>
            </Link>
            <Link
              to="/payments"
              className="links"
              onClick={() => {
                setLink1(false);
                setLink2(false);
                setLink3(false);
                setLink4(true);
                setLink5(false);
                setLink6(false);
              }}
              style={
                link4
                  ? { backgroundColor: "#e6bd1c" }
                  : { backgroundColor: "transparent" }
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="17"
                viewBox="0 0 15 17"
                fill="none"
              >
                <path
                  d="M8.84933 8.32402L6.43862 7.65332C6.03348 7.54043 5.74888 7.1752 5.74888 6.7668C5.74888 6.25879 6.17745 5.84375 6.70312 5.84375H8.20982C8.58482 5.84375 8.94308 5.96328 9.23437 6.1791C9.34152 6.25879 9.48884 6.24551 9.58259 6.15254L9.96094 5.7707C10.0748 5.65781 10.0614 5.47188 9.93415 5.37227C9.44531 4.98711 8.84263 4.77793 8.20647 4.77793H8.03571V3.4498C8.03571 3.30371 7.91518 3.18418 7.76786 3.18418H7.23214C7.08482 3.18418 6.96429 3.30371 6.96429 3.4498V4.77793H6.70312C5.58817 4.77793 4.67745 5.66777 4.67745 6.76348C4.67745 7.64668 5.28348 8.43027 6.14732 8.67266L8.55804 9.34336C8.96317 9.45625 9.24777 9.82148 9.24777 10.2299C9.24777 10.7379 8.8192 11.1529 8.29353 11.1529H6.78683C6.41183 11.1529 6.05357 11.0334 5.76228 10.8176C5.65513 10.7379 5.50781 10.7512 5.41406 10.8441L5.03571 11.226C4.92187 11.3389 4.93527 11.5248 5.0625 11.6244C5.55134 12.0096 6.15402 12.2188 6.79018 12.2188H6.96429V13.5469C6.96429 13.693 7.08482 13.8125 7.23214 13.8125H7.76786C7.91518 13.8125 8.03571 13.693 8.03571 13.5469V12.2188H8.29688C9.41183 12.2188 10.3225 11.3289 10.3225 10.2332C10.3192 9.35 9.71652 8.56641 8.84933 8.32402ZM13.3929 1.0625H1.60714C0.719866 1.0625 0 1.77637 0 2.65625V14.3438C0 15.2236 0.719866 15.9375 1.60714 15.9375H13.3929C14.2801 15.9375 15 15.2236 15 14.3438V2.65625C15 1.77637 14.2801 1.0625 13.3929 1.0625ZM13.9286 14.3438C13.9286 14.6359 13.6875 14.875 13.3929 14.875H1.60714C1.3125 14.875 1.07143 14.6359 1.07143 14.3438V2.65625C1.07143 2.36406 1.3125 2.125 1.60714 2.125H13.3929C13.6875 2.125 13.9286 2.36406 13.9286 2.65625V14.3438Z"
                  fill="black"
                />
              </svg>
              <p>Payment</p>
            </Link>
            <Link
              to="/home"
              className="links"
              onClick={() => {
                setLink1(false);
                setLink2(false);
                setLink3(false);
                setLink4(false);
                setLink5(true);
                setLink6(false);
              }}
              style={
                link5
                  ? { backgroundColor: "#e6bd1c" }
                  : { backgroundColor: "transparent" }
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="17"
                viewBox="0 0 13 17"
                fill="none"
              >
                <g path="url(#clip0_17_18)">
                  <path
                    d="M4.60417 10.625H4.0625C3.91354 10.625 3.79167 10.7445 3.79167 10.8906V14.0781C3.79167 14.2242 3.91354 14.3438 4.0625 14.3438H4.60417C4.75313 14.3438 4.875 14.2242 4.875 14.0781V10.8906C4.875 10.7445 4.75313 10.625 4.60417 10.625ZM6.77083 7.4375H6.22917C6.08021 7.4375 5.95833 7.55703 5.95833 7.70312V14.0781C5.95833 14.2242 6.08021 14.3438 6.22917 14.3438H6.77083C6.91979 14.3438 7.04167 14.2242 7.04167 14.0781V7.70312C7.04167 7.55703 6.91979 7.4375 6.77083 7.4375ZM8.125 9.82812V14.0781C8.125 14.2242 8.24688 14.3438 8.39583 14.3438H8.9375C9.08646 14.3438 9.20833 14.2242 9.20833 14.0781V9.82812C9.20833 9.68203 9.08646 9.5625 8.9375 9.5625H8.39583C8.24688 9.5625 8.125 9.68203 8.125 9.82812ZM12.5227 3.25324L9.68297 0.468164C9.37828 0.169336 8.96526 0 8.53565 0H1.62466C0.727865 0.00332031 0 0.717188 0 1.59674V15.4066C0 16.2861 0.727865 17 1.62466 17H11.3753C12.2721 17 13 16.2861 13 15.4066V4.38182C13 3.96047 12.8273 3.55207 12.5227 3.25324ZM8.66768 1.08209C8.76247 1.10533 8.84711 1.15182 8.9182 1.22154L11.7579 4.00662C11.829 4.07635 11.8764 4.15936 11.9001 4.25232H8.66768V1.08209ZM11.917 15.4066C11.917 15.6988 11.6733 15.9378 11.3753 15.9378H1.62466C1.32674 15.9378 1.08299 15.6988 1.08299 15.4066V1.59674C1.08299 1.30455 1.32674 1.0625 1.62466 1.0625H7.58435V4.51795C7.58435 4.95955 7.94659 5.3125 8.39685 5.3125H11.917V15.4066Z"
                    fill="black"
                  />
                </g>
                <defs>
                  {/* <clipPath id="clip0_17_18">
                    <rect width="13" height="17" fill="white" />
                  </clipPath> */}
                </defs>
              </svg>
              <p>Report</p>
            </Link>
            <Link
              to="/home"
              className="links"
              onClick={() => {
                setLink1(false);
                setLink2(false);
                setLink3(false);
                setLink4(false);
                setLink5(false);
                setLink6(true);
              }}
              style={
                link6
                  ? { backgroundColor: "#e6bd1c" }
                  : { backgroundColor: "transparent" }
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
              >
                <path d="M12 16c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.084 0 2 .916 2 2s-.916 2-2 2-2-.916-2-2 .916-2 2-2z"></path>
                <path d="m2.845 16.136 1 1.73c.531.917 1.809 1.261 2.73.73l.529-.306A8.1 8.1 0 0 0 9 19.402V20c0 1.103.897 2 2 2h2c1.103 0 2-.897 2-2v-.598a8.132 8.132 0 0 0 1.896-1.111l.529.306c.923.53 2.198.188 2.731-.731l.999-1.729a2.001 2.001 0 0 0-.731-2.732l-.505-.292a7.718 7.718 0 0 0 0-2.224l.505-.292a2.002 2.002 0 0 0 .731-2.732l-.999-1.729c-.531-.92-1.808-1.265-2.731-.732l-.529.306A8.1 8.1 0 0 0 15 4.598V4c0-1.103-.897-2-2-2h-2c-1.103 0-2 .897-2 2v.598a8.132 8.132 0 0 0-1.896 1.111l-.529-.306c-.924-.531-2.2-.187-2.731.732l-.999 1.729a2.001 2.001 0 0 0 .731 2.732l.505.292a7.683 7.683 0 0 0 0 2.223l-.505.292a2.003 2.003 0 0 0-.731 2.733zm3.326-2.758A5.703 5.703 0 0 1 6 12c0-.462.058-.926.17-1.378a.999.999 0 0 0-.47-1.108l-1.123-.65.998-1.729 1.145.662a.997.997 0 0 0 1.188-.142 6.071 6.071 0 0 1 2.384-1.399A1 1 0 0 0 11 5.3V4h2v1.3a1 1 0 0 0 .708.956 6.083 6.083 0 0 1 2.384 1.399.999.999 0 0 0 1.188.142l1.144-.661 1 1.729-1.124.649a1 1 0 0 0-.47 1.108c.112.452.17.916.17 1.378 0 .461-.058.925-.171 1.378a1 1 0 0 0 .471 1.108l1.123.649-.998 1.729-1.145-.661a.996.996 0 0 0-1.188.142 6.071 6.071 0 0 1-2.384 1.399A1 1 0 0 0 13 18.7l.002 1.3H11v-1.3a1 1 0 0 0-.708-.956 6.083 6.083 0 0 1-2.384-1.399.992.992 0 0 0-1.188-.141l-1.144.662-1-1.729 1.124-.651a1 1 0 0 0 .471-1.108z"></path>
              </svg>
              <p className="open-t">Settings</p>
            </Link>
          </div>
          <Link to="/" style={{ marginRight: "8rem" }}>
            <div className="block-4" onClick={() => setDark(!dark)}>
              <button>Logout</button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 17 17"
                fill="black"
                style={{ cursor: "pointer", width: "2rem" }}
              >
                <path d="M5.3125 7.2084C5.3125 6.91621 5.55156 6.67715 5.84375 6.67715H10.625V3.55937C10.625 3.32363 10.9105 3.2041 11.0766 3.37012L15.7781 8.12148C15.9873 8.33066 15.9873 8.66602 15.7781 8.8752L11.0766 13.6266C10.9105 13.7926 10.625 13.6764 10.625 13.4373V10.3195H5.84375C5.55156 10.3195 5.3125 10.0805 5.3125 9.78828V7.2084ZM4.25 7.2084V9.78828C4.25 10.6682 4.96387 11.382 5.84375 11.382H9.5625V13.4373C9.5625 14.616 10.9902 15.2137 11.827 14.377L16.5318 9.62891C17.1561 9.00469 17.1561 7.99531 16.5318 7.37109L11.827 2.61973C10.9936 1.78633 9.5625 2.37734 9.5625 3.55937V5.61465H5.84375C4.96387 5.61465 4.25 6.33184 4.25 7.2084ZM0 3.71875V13.2812C0 14.1611 0.713867 14.875 1.59375 14.875H5.97656C6.1957 14.875 6.375 14.6957 6.375 14.4766V14.2109C6.375 13.9918 6.1957 13.8125 5.97656 13.8125H1.59375C1.30156 13.8125 1.0625 13.5734 1.0625 13.2812V3.71875C1.0625 3.42656 1.30156 3.1875 1.59375 3.1875H5.97656C6.1957 3.1875 6.375 3.0082 6.375 2.78906V2.52344C6.375 2.3043 6.1957 2.125 5.97656 2.125H1.59375C0.713867 2.125 0 2.83887 0 3.71875Z" />
              </svg>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Aside;
