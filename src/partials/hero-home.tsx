import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';

function HeroHome() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Illustration behind hero content */}
        {/* <div
          className="absolute left-0 bottom-0 -ml-96 -mb-10 hidden lg:block pointer-events-none"
          aria-hidden="true"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <svg
            className="max-w-full"
            width="564"
            height="552"
            viewBox="0 0 564 552"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="illustration-02"
                x1="-3.766"
                y1="300.204"
                x2="284.352"
                y2="577.921"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#5D5DFF" stopOpacity=".01" />
                <stop offset="1" stopColor="#5D5DFF" stopOpacity=".32" />
              </linearGradient>
            </defs>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M151.631 22.954c19.025-13.987 40.754-20.902 67.157-20.902 18.865 0 40.12 3.534 64.461 10.542 15.855 4.566 30.274 8.448 43.282 11.908-3.117-.73-6.316-1.474-9.604-2.238-13.789-3.205-29.419-6.84-46.941-11.331C153.37-18.963 125.867 40.456 75.939 148.322l-.003.006a7576.221 7576.221 0 01-7.711 16.624c-29.474 63.279-43.616 99.759-44.264 135.927-.659 36.738 12.251 72.311 47.633 131.253 35.391 58.957 60.19 86.192 91.501 100.484.962.439 1.93.865 2.905 1.279-9.73-2.472-18.561-5.625-26.916-9.633-32.753-15.71-57.88-43.982-92.714-104.315-34.834-60.333-46.755-96.23-43.984-132.449 2.732-35.713 20.082-71.213 55.526-132.603a7349.326 7349.326 0 009.317-16.2l.004-.007c29.787-51.892 53.315-92.88 84.398-115.734zm34.507 514.934a241.712 241.712 0 01-5.151-.83c-5.964-1.702-11.607-3.772-17.062-6.262-30.898-14.104-55.459-41.124-90.616-99.693-35.167-58.584-48-93.868-47.349-130.187.642-35.809 14.725-72.101 44.078-135.12 2.513-5.395 4.96-10.683 7.356-15.857l.357-.771.002-.005c24.651-53.256 44.122-95.32 71.478-119.633 18.318-16.282 40.065-24.26 67.588-24.26 15.567 0 32.985 2.554 52.67 7.6 14.706 3.77 28.076 6.935 40.144 9.75-2.797-.558-5.665-1.125-8.609-1.707h-.003l-.003-.001-.053-.01h-.001c-12.823-2.535-27.354-5.407-43.664-9.044C148.495-12.404 126.33 48.27 86.092 158.42l-.004.011-.016.042a8434.991 8434.991 0 01-6.201 16.936c-23.765 64.604-34.847 101.709-33.55 137.844C47.638 349.957 61.359 384.852 96.945 442c35.541 57.077 59.736 83.093 89.193 95.888zm16.598 2.005a338.416 338.416 0 01-8.148-.869 103.656 103.656 0 01-7.5-2.904c-28.737-12.428-53.535-39.114-88.445-95.176-35.381-56.82-49.02-91.447-50.323-127.762-1.285-35.802 9.756-72.729 33.428-137.083 1.94-5.276 3.831-10.449 5.683-15.517l.007-.017.007-.021.522-1.427c19.862-54.372 35.55-97.317 59.408-122.911C172.358 9.403 206.126 2.494 256.864 13.81c13.649 3.043 26.048 5.55 37.243 7.773-2.531-.411-5.124-.828-7.785-1.255l-.071-.011h-.003c-11.906-1.914-25.397-4.082-40.56-6.926C144.349-5.618 127.156 56.06 95.945 168.03l-.003.009a8355.73 8355.73 0 01-4.821 17.248c-18.45 65.652-26.689 103.234-23.608 139.244 3.09 36.109 18.017 71.465 53.24 126.105 33.482 51.938 56.333 76.988 81.983 89.257zm15.827 1.2a485.788 485.788 0 01-9.653-.664l-.264-.107c-27.037-11.022-51.209-36.471-86.212-90.77-35.484-55.044-49.829-88.975-52.928-125.19-3.055-35.705 5.157-73.119 23.541-138.534a8620.925 8620.925 0 004.497-16.087l.325-1.165.002-.006c15.402-55.255 27.568-98.9 48.147-125.608 16.123-20.925 37.347-30.952 66.801-30.952 9.869 0 20.667 1.127 32.5 3.347 12.636 2.37 24.106 4.27 34.467 5.944-2.277-.28-4.608-.562-6.997-.85h-.001l-.001-.001h-.001c-11.054-1.338-23.584-2.855-37.688-4.97-94.204-14.122-106.775 48.314-129.594 161.65l-.003.014-.047.235-.002.008a8400.92 8400.92 0 01-3.479 17.22c-13.513 66.44-19.115 104.361-14.4 140.163 4.727 35.898 20.289 70.48 55.506 123.345 31.385 47.111 52.956 71.08 75.484 82.978zm15.539.719a709.825 709.825 0 01-10.437-.441c-23.548-10.908-46.233-35.298-78.922-84.366-35.486-53.268-50.443-86.468-55.187-122.497-3.728-28.301-2.526-56.394 14.377-139.503 1.21-5.95 2.383-11.773 3.529-17.466 11.26-55.927 20.154-100.102 37.666-127.768 18.294-28.901 45.951-38.863 89.673-32.313 11.708 1.755 22.326 3.099 31.917 4.27-2.072-.167-4.193-.334-6.366-.505h-.002l-.018-.002c-10.221-.803-21.804-1.714-34.864-3.146-87.388-9.576-95.67 53.388-110.705 167.692l-.002.014-.047.36c-.74 5.623-1.496 11.372-2.28 17.244-8.937 66.993-12.098 105.125-5.896 140.639 6.221 35.612 22.326 69.391 57.443 120.48 29.544 42.981 49.981 65.798 70.121 77.308zm54.655.656c-2.322.006-4.68.009-7.073.009-15.823 0-30.079-.135-43.037-.519-20.923-10.699-42.32-33.928-73.018-78.587-35.393-51.49-50.874-83.93-57.12-119.691-4.907-28.091-5.274-56.21 5.907-140.03.786-5.887 1.544-11.65 2.286-17.287v-.001l.042-.32c7.418-56.4 13.278-100.948 27.923-129.427 13.148-25.57 33.385-37.482 64.556-37.482 5.049 0 10.388.312 16.027.93 13.049 1.43 24.617 2.341 34.829 3.145h.001l.114.009h.001c59.526 4.682 79.579 6.26 136.926 89.687 36.003 52.377 54.831 83.312 64.453 117.449 9.765 34.64 10.139 71.93 1.38 137.589-8.64 64.766-18.645 98.41-35.683 119.994-16.965 21.491-41.268 32.104-86.06 46.46-1.661.532-3.296 1.052-4.905 1.56a1391.5 1391.5 0 01-10.245 2.482 1345.267 1345.267 0 01-11.347 1.958 1812.762 1812.762 0 01-12.481 1.367 2129.386 2129.386 0 01-13.476.705zm27.18 1.709c50.448-1.039 82.218-5.164 109.211-18.112 33.159-15.904 58.522-44.394 93.581-105.118 35.06-60.724 47.051-96.934 44.246-133.603-2.762-36.096-20.19-71.792-55.788-133.449-56.949-98.64-86.21-106.404-173.068-129.448l-.056-.014c-14.774-3.92-31.516-8.363-50.261-13.76C159.031-25.254 125.808 32.624 65.497 137.694l-.002.003a6915.634 6915.634 0 01-9.316 16.197C20.581 215.552 3.154 251.247.392 287.344c-2.806 36.669 9.186 72.879 44.245 133.603 35.06 60.724 60.423 89.214 93.582 105.118 12.593 6.04 26.224 10.16 42.307 12.943 6.906 1.966 14.23 3.443 22.172 4.508 6.442 1.628 13.241 2.748 20.583 3.429 5.999 1.314 12.297 2.105 19.071 2.433 5.603 1.028 11.455 1.517 17.722 1.517l.314-.001c3.67.505 7.416.742 11.25.742 13.466 0 28.027-2.926 44.299-7.459zm18.196-2.551c42.427-3.518 69.755-9.295 92.704-22.832 29.646-17.487 51.462-47.164 80.495-109.498 29.027-62.318 38.148-99.046 33.653-135.513-4.425-35.901-22.303-70.703-58.23-130.556-39.939-66.535-65.307-89.912-104.239-104.3 53.844 16.863 81.528 37.31 126.939 115.968 35.443 61.39 52.793 96.891 55.525 132.603 2.772 36.219-9.149 72.116-43.983 132.449-34.834 60.333-59.962 88.605-92.714 104.315-23.296 11.175-50.3 15.706-90.15 17.364zm93.883-30.185c-20.416 14.652-45.267 21.74-84.153 27.302 36.558-3.571 61.14-9.392 81.957-21.671 29.256-17.257 50.857-46.697 79.7-108.619 28.849-61.94 37.924-98.373 33.479-134.425-4.381-35.543-22.179-70.166-57.959-129.772-45.707-76.146-72.185-95.334-122.253-109.565 36.374 12.515 60.888 34.697 100.963 99.056 36.138 58.035 54.382 91.924 60.326 127.553 6.035 36.185-.421 73.291-23.824 136.909-23.412 63.646-41.906 94.334-68.236 113.232zm-75.097 23.912c35.377-7.423 57.817-15.704 75.801-31.314 23.206-20.143 38.593-51.68 56.77-116.363 18.167-64.644 22.158-101.999 14.722-137.83-7.323-35.285-25.856-68.245-62.092-124.454-40.109-62.219-63.784-83.239-97.755-94.01 46.513 11.797 71.824 29.769 117.688 103.423 35.995 57.806 54.162 91.528 60.05 126.824 5.972 35.804-.459 72.634-23.728 135.889-22.96 62.416-41.892 93.9-67.525 112.298-18.433 13.228-40.651 20.217-73.931 25.537zm76.065-38.742c-16.398 17.18-38.639 26.625-66.953 34.691 29.631-6.852 49.359-14.869 65.378-28.773 22.583-19.603 38.327-51.956 56.156-115.394 18.071-64.301 22.052-101.4 14.688-136.882-7.258-34.975-25.716-67.78-61.814-123.777-45.857-71.136-70.036-87.963-113.146-97.515 31.663 9.156 54.508 29.065 94.518 89.127 36.23 54.385 54.981 86.404 63.553 121.278 8.703 35.411 6.992 72.898-6.313 138.315-13.314 65.463-25.8 97.696-46.067 118.93zm-59.762 30.414c25.551-9.413 45.464-19.917 59.62-37.85 17.506-22.178 27.29-54.964 36.094-120.97 8.799-65.956 8.41-103.465-1.437-138.395-4.847-17.196-12.323-34.408-23.53-54.17-10.572-18.643-24.116-39.015-41.2-63.869-39.854-57.98-61.888-76.799-91.408-84.443 39.946 7.477 63.031 23.183 108.786 91.868 36.098 54.188 54.774 86.063 63.275 120.648 8.626 35.092 6.91 72.342-6.33 137.439-13.062 64.216-25.834 97.286-45.555 117.947-13.941 14.607-31.58 23.548-58.315 31.795z"
              fill="url(#illustration-02)"
            />
          </svg>
        </div> */}
        {/* Hero content */}
        <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            {/* Logo */}
            <h1 className="flex justify-center h1 mb-2" data-aos="fade-up" aria-label="Open Feature">
              <svg
                className="dark:fill-white fill-black"
                width="522"
                height="77"
                viewBox="0 0 522 77"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_53_2)">
                  <path d="M62.0447 0H29.2289C21.4753 0 14.0421 3.0238 8.56263 8.42999C3.08316 13.8209 0 21.1361 0 28.7719C0 36.4078 3.08316 43.7229 8.56263 49.1138C14.0421 54.5048 21.4753 57.5438 29.2289 57.5438H62.0447C69.7984 57.5438 77.2316 54.52 82.7111 49.1138C88.1905 43.7229 91.2737 36.4078 91.2737 28.7719C91.2737 21.1361 88.1905 13.8209 82.7111 8.42999C77.2316 3.03907 69.7984 0 62.0447 0ZM62.1668 49.9538C57.9084 49.9538 53.7416 48.7168 50.2158 46.3802C46.6747 44.0589 43.9121 40.7449 42.2942 36.8659C40.6611 32.9869 40.2337 28.7261 41.0732 24.618C41.8974 20.5099 43.9579 16.7378 46.9647 13.7751C49.9716 10.8124 53.8026 8.79651 57.9847 7.97184C62.1669 7.14716 66.4863 7.57477 70.4242 9.1783C74.3621 10.7818 77.72 13.5002 80.0858 16.9822C82.4516 20.4641 83.7184 24.5569 83.7184 28.7566C83.7184 31.5514 83.169 34.3003 82.0853 36.8812C81.0016 39.4621 79.4142 41.7987 77.4147 43.7687C75.4153 45.7388 73.0342 47.2965 70.409 48.3655C67.799 49.4346 64.9905 49.9691 62.1516 49.9691H62.1974L62.1668 49.9538ZM114.199 15.0274C117.236 13.3169 120.686 12.4617 124.181 12.5381C127.905 12.4923 131.584 13.4544 134.789 15.3023C137.979 17.1501 140.574 19.838 142.283 23.0756C144.161 26.6644 145.107 30.6656 145.015 34.7126C145.092 38.7749 144.161 42.7914 142.283 46.3955C140.604 49.6942 138.009 52.4431 134.804 54.3673C131.599 56.2916 127.921 57.2689 124.181 57.2079C120.716 57.2842 117.297 56.4137 114.291 54.7186C111.619 53.2219 109.361 51.0992 107.758 48.5183V77H100.462V13.2559H107.758V21.2277C109.315 18.6315 111.543 16.4935 114.214 15.0274H114.199ZM135.552 26.1757C134.316 23.8697 132.438 21.9455 130.134 20.6474C127.844 19.3798 125.265 18.7384 122.639 18.7537C120.045 18.7384 117.481 19.4104 115.237 20.6932C112.932 22.0218 111.039 23.9613 109.788 26.2826C108.429 28.9399 107.727 31.8568 107.727 34.8348C107.727 37.8128 108.429 40.7297 109.788 43.387C111.039 45.7083 112.932 47.6478 115.237 48.9764C117.481 50.2592 120.045 50.9312 122.639 50.9159C125.265 50.9312 127.844 50.2745 130.134 48.9764C132.438 47.6478 134.316 45.7083 135.552 43.387C136.941 40.7144 137.628 37.7517 137.552 34.7584C137.628 31.7804 136.941 28.833 135.552 26.191V26.1757ZM191.308 37.5379H156.218C156.218 39.3552 156.6 41.1573 157.317 42.8372C158.035 44.5171 159.103 46.029 160.431 47.2965C161.759 48.5641 163.331 49.5567 165.071 50.2134C166.796 50.8701 168.643 51.1755 170.489 51.1144C173.283 51.2061 176.045 50.4578 178.381 48.9459C180.456 47.5409 182.013 45.5097 182.822 43.1426H190.667C189.553 47.2202 187.065 50.7937 183.616 53.283C179.8 55.9708 175.175 57.3453 170.474 57.1926C166.552 57.2537 162.675 56.2763 159.256 54.3826C155.974 52.55 153.288 49.8316 151.517 46.5482C149.594 42.9135 148.633 38.8513 148.724 34.7584C148.633 30.6809 149.564 26.6339 151.441 22.9992C153.166 19.7311 155.822 17.028 159.088 15.2259C162.568 13.3628 166.475 12.4312 170.428 12.5075C174.29 12.4312 178.106 13.3628 181.479 15.1954C184.608 16.9058 187.187 19.4714 188.897 22.5716C190.667 25.8397 191.568 29.4897 191.507 33.1854C191.507 34.6515 191.461 36.1176 191.308 37.5684V37.5379ZM182.181 24.6486C180.975 22.709 179.251 21.1513 177.175 20.1434C174.992 19.1049 172.596 18.5704 170.169 18.601C166.704 18.5093 163.331 19.7311 160.767 22.0218C158.081 24.5417 156.478 27.9931 156.325 31.643H184.043C184.104 29.1843 183.463 26.756 182.196 24.6333L182.181 24.6486ZM232.412 17.2265C235.724 20.4183 237.373 24.9998 237.373 30.9863V56.4595H230.168V32.0095C230.168 27.7029 229.085 24.4042 226.887 22.1134C225.727 20.9528 224.323 20.0518 222.766 19.4562C221.224 18.8606 219.561 18.601 217.912 18.6926C216.218 18.6162 214.524 18.8911 212.936 19.502C211.349 20.1129 209.929 21.0444 208.739 22.2509C206.419 24.618 205.289 28.0694 205.32 32.5898V56.5206H198.024V13.2559H205.32V19.4104C206.77 17.196 208.8 15.4244 211.212 14.2791C213.776 13.0573 216.584 12.4312 219.423 12.4617C221.804 12.3548 224.17 12.7366 226.398 13.546C228.627 14.3707 230.672 15.6077 232.397 17.2265H232.412ZM277.744 1.49663V7.3457H253.445V25.9008H273.119V31.7499H253.445V56.5054H246.149V1.49663H277.744ZM323.243 37.5379H288.138C288.138 39.3552 288.519 41.1573 289.237 42.8372C289.969 44.5171 291.023 46.029 292.351 47.2965C293.678 48.5641 295.251 49.5567 296.991 50.2134C298.715 50.8701 300.562 51.1755 302.409 51.1144C305.202 51.2061 307.965 50.4578 310.3 48.9459C312.376 47.5409 313.933 45.5097 314.742 43.1426H322.587C321.473 47.2202 319 50.7937 315.535 53.283C311.719 55.9708 307.095 57.3453 302.409 57.1926C298.502 57.2537 294.64 56.3068 291.236 54.4284C287.955 52.5958 285.268 49.8774 283.513 46.594C281.605 42.9593 280.644 38.8971 280.751 34.8042C280.659 30.7267 281.59 26.6797 283.467 23.045C285.192 19.7769 287.848 17.0738 291.114 15.2717C294.594 13.4086 298.502 12.477 302.455 12.5534C306.316 12.477 310.132 13.4086 313.505 15.2412C316.634 16.9669 319.214 19.5173 320.923 22.6174C322.678 25.8856 323.579 29.5355 323.518 33.2313C323.518 34.6821 323.411 36.1329 323.243 37.5684V37.5379ZM314.101 24.6486C312.895 22.7243 311.17 21.1819 309.094 20.1892C306.912 19.1507 304.515 18.6162 302.088 18.6468C298.624 18.5551 295.251 19.7769 292.686 22.0676C290 24.5875 288.397 28.0389 288.229 31.6888H316.008C316.069 29.2148 315.398 26.7713 314.116 24.6333L314.101 24.6486ZM329.959 23.0756C331.668 19.8532 334.263 17.1501 337.453 15.3023C340.674 13.4391 344.352 12.4923 348.076 12.5381C351.572 12.4617 355.036 13.3017 358.089 14.9816C360.73 16.4171 362.927 18.5551 364.423 21.1361V13.2559H371.795V56.4748H364.423V48.4266C362.882 51.0534 360.653 53.2219 357.982 54.7033C354.945 56.3985 351.495 57.2537 348 57.1926C344.291 57.2384 340.643 56.261 337.453 54.3826C334.278 52.4431 331.699 49.6942 330.005 46.4108C328.143 42.8066 327.212 38.7902 327.288 34.7432C327.181 30.6962 328.112 26.695 329.974 23.0908L329.959 23.0756ZM362.363 26.2674C361.126 23.9461 359.249 22.0218 356.959 20.7085C354.67 19.4562 352.106 18.7995 349.496 18.7995C346.886 18.7995 344.306 19.4562 342.032 20.7085C339.743 22.0065 337.881 23.9308 336.66 26.2368C335.271 28.8635 334.584 31.7957 334.66 34.7584C334.584 37.7517 335.271 40.7297 336.66 43.387C337.881 45.7083 339.743 47.6478 342.032 48.9764C344.291 50.2745 346.855 50.9465 349.481 50.9159C352.106 50.9312 354.701 50.2745 356.975 48.9764C359.28 47.6478 361.157 45.7083 362.378 43.387C363.752 40.7449 364.454 37.7975 364.377 34.8348C364.469 31.8568 363.797 28.9094 362.424 26.2674H362.378H362.363ZM389.882 19.166V44.6392C389.806 45.4334 389.882 46.2428 390.111 47.0064C390.34 47.7699 390.737 48.4877 391.241 49.0986C392.141 49.9691 393.728 50.3967 395.972 50.3967H401.33V56.4748H394.766C390.706 56.4748 387.654 55.5585 385.624 53.7106C383.594 51.8628 382.586 48.839 382.586 44.5934V19.166H376.908V13.2559H382.571V2.35184H389.867V13.2406H401.33V19.1507H389.882V19.166ZM445.959 13.2559V56.4748H438.663V50.0912C437.259 52.3209 435.259 54.1077 432.878 55.2531C430.329 56.5054 427.521 57.1315 424.667 57.1162C421.446 57.1773 418.272 56.4595 415.402 55.024C412.655 53.619 410.411 51.4351 408.946 48.7626C407.297 45.6166 406.504 42.1194 406.626 38.5916V13.2559H413.799V37.6295C413.799 41.8903 414.898 45.1585 417.081 47.4492C418.241 48.6099 419.645 49.5109 421.187 50.1065C422.728 50.7021 424.392 50.9617 426.041 50.8701C427.75 50.9617 429.46 50.6868 431.062 50.076C432.665 49.4651 434.1 48.5182 435.305 47.3118C437.534 44.9599 438.663 41.5085 438.663 36.9728V13.2559H445.928H445.959ZM467.953 14.4929C470.609 13.0573 473.616 12.3395 476.638 12.4464V19.8532H474.715C466.534 19.8532 462.443 24.2209 462.443 32.9411V56.4443H455.147V13.2559H462.397V20.2808C463.618 17.8679 465.542 15.852 467.923 14.5081L467.953 14.4929ZM521.741 37.5379H486.651C486.651 39.3552 487.017 41.1573 487.75 42.8372C488.467 44.5171 489.535 46.029 490.863 47.2965C492.191 48.5641 493.763 49.5567 495.503 50.2134C497.228 50.8701 499.075 51.1755 500.922 51.1144C503.715 51.2213 506.477 50.4578 508.813 48.9459C510.904 47.5409 512.461 45.5097 513.254 43.1426H521.115C520.001 47.2049 517.513 50.7785 514.063 53.283C510.232 55.9708 505.623 57.3453 500.922 57.1926C497.014 57.2537 493.168 56.3068 489.749 54.4284C486.467 52.5958 483.781 49.8774 482.026 46.594C480.087 42.9593 479.126 38.8971 479.217 34.8042C479.126 30.7267 480.072 26.6797 481.95 23.045C483.674 19.7769 486.33 17.0738 489.596 15.2717C493.061 13.4086 496.968 12.477 500.922 12.5534C504.783 12.477 508.599 13.4086 511.987 15.2412C515.116 16.9516 517.681 19.5173 519.39 22.6174C521.161 25.8856 522.061 29.5355 522 33.2313C522 34.6821 521.908 36.1329 521.756 37.5684L521.741 37.5379ZM512.613 24.6486C511.407 22.709 509.637 21.1666 507.561 20.1892C505.394 19.1507 503.028 18.6315 500.616 18.6468C497.152 18.5551 493.778 19.7769 491.199 22.0676C488.513 24.5875 486.91 28.0389 486.757 31.6888H514.536C514.582 29.2148 513.926 26.7713 512.628 24.6333L512.613 24.6486Z" />
                </g>
              </svg>
            </h1>
            <p
              className="text-xl text-semibold dark:fill-white fill-black mb-8"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {siteConfig.tagline}
            </p>
            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div data-aos="fade-up" data-aos-delay="400">
                <Link
                  className="btn text-white hover:text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0"
                  to="/docs/reference/intro"
                >
                  Learn more
                </Link>
              </div>
              <div data-aos="fade-up" data-aos-delay="600">
                <Link
                  className="btn text-white hover:text-white bg-gray-700 hover:bg-gray-800 w-full sm:w-auto sm:ml-4"
                  // TODO change once the Five Minutes to Feature Flags tutorial is ready
                  to="/docs/category/getting-started"
                >
                  Get started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
