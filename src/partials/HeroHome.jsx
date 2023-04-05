import React, { useEffect, useRef, useState } from 'react';
import Modal from '../utils/Modal';

function HeroHome() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const video = useRef(null);

  useEffect(() => {
    videoModalOpen ? video.current.play() : video.current.pause();
  }, [videoModalOpen]);

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Illustration behind hero content */}
        <div
          className="absolute left-0 bottom-0 -ml-20 hidden lg:block pointer-events-none"
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
        </div>

        {/* Hero content */}
        <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            {/* Logo */}
            <h1 className="h1 mb-4" data-aos="fade-up" data-aos-delay="400" aria-label="Open Feature">
              <span className="visually-hidden">Open Feature</span>
              <svg
                className="logo"
                width="450"
                height="67"
                viewBox="0 0 450 67"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_53_2)">
                  <path
                    d="M53.4868 0H25.1974C18.5132 0 12.1053 2.60526 7.38158 7.26316C2.6579 11.9079 0 18.2105 0 24.7895C0 31.3684 2.6579 37.6711 7.38158 42.3158C12.1053 46.9605 18.5132 49.5789 25.1974 49.5789H53.4868C60.1711 49.5789 66.5789 46.9737 71.3026 42.3158C76.0263 37.6711 78.6842 31.3684 78.6842 24.7895C78.6842 18.2105 76.0263 11.9079 71.3026 7.26316C66.5789 2.61842 60.1711 0 53.4868 0ZM53.5921 43.0395C49.9211 43.0395 46.3289 41.9737 43.2895 39.9605C40.2368 37.9605 37.8553 35.1053 36.4605 31.7632C35.0526 28.4211 34.6842 24.75 35.4079 21.2105C36.1184 17.6711 37.8947 14.4211 40.4868 11.8684C43.0789 9.31579 46.3816 7.57895 49.9868 6.86842C53.5921 6.15789 57.3158 6.52632 60.7105 7.90789C64.1053 9.28947 67 11.6316 69.0395 14.6316C71.0789 17.6316 72.171 21.1579 72.171 24.7763C72.171 27.1842 71.6974 29.5526 70.7632 31.7763C69.8289 34 68.4605 36.0132 66.7368 37.7105C65.0132 39.4079 62.9605 40.75 60.6974 41.6711C58.4474 42.5921 56.0263 43.0526 53.5789 43.0526H53.6184L53.5921 43.0395ZM98.4474 12.9474C101.066 11.4737 104.039 10.7368 107.053 10.8026C110.263 10.7632 113.434 11.5921 116.197 13.1842C118.947 14.7763 121.184 17.0921 122.658 19.8816C124.276 22.9737 125.092 26.4211 125.013 29.9079C125.079 33.4079 124.276 36.8684 122.658 39.9737C121.211 42.8158 118.974 45.1842 116.211 46.8421C113.447 48.5 110.276 49.3421 107.053 49.2895C104.066 49.3553 101.118 48.6053 98.5263 47.1447C96.2237 45.8553 94.2763 44.0263 92.8947 41.8026V66.3421H86.6053V11.4211H92.8947V18.2895C94.2368 16.0526 96.1579 14.2105 98.4605 12.9474H98.4474ZM116.855 22.5526C115.789 20.5658 114.171 18.9079 112.184 17.7895C110.211 16.6974 107.987 16.1447 105.724 16.1579C103.487 16.1447 101.276 16.7237 99.3421 17.8289C97.3553 18.9737 95.7237 20.6447 94.6447 22.6447C93.4737 24.9342 92.8684 27.4474 92.8684 30.0132C92.8684 32.5789 93.4737 35.0921 94.6447 37.3816C95.7237 39.3816 97.3553 41.0526 99.3421 42.1974C101.276 43.3026 103.487 43.8816 105.724 43.8684C107.987 43.8816 110.211 43.3158 112.184 42.1974C114.171 41.0526 115.789 39.3816 116.855 37.3816C118.053 35.0789 118.645 32.5263 118.579 29.9474C118.645 27.3816 118.053 24.8421 116.855 22.5658V22.5526ZM164.921 32.3421H134.671C134.671 33.9079 135 35.4605 135.618 36.9079C136.237 38.3553 137.158 39.6579 138.303 40.75C139.447 41.8421 140.803 42.6974 142.303 43.2632C143.789 43.8289 145.382 44.0921 146.974 44.0395C149.382 44.1184 151.763 43.4737 153.776 42.1711C155.566 40.9605 156.908 39.2105 157.605 37.1711H164.368C163.408 40.6842 161.263 43.7632 158.289 45.9079C155 48.2237 151.013 49.4079 146.961 49.2763C143.579 49.3289 140.237 48.4868 137.289 46.8553C134.461 45.2763 132.145 42.9342 130.618 40.1053C128.961 36.9737 128.132 33.4737 128.211 29.9474C128.132 26.4342 128.934 22.9474 130.553 19.8158C132.039 17 134.329 14.6711 137.145 13.1184C140.145 11.5132 143.513 10.7105 146.921 10.7763C150.25 10.7105 153.539 11.5132 156.447 13.0921C159.145 14.5658 161.368 16.7763 162.842 19.4474C164.368 22.2632 165.145 25.4079 165.092 28.5921C165.092 29.8553 165.053 31.1184 164.921 32.3684V32.3421ZM157.053 21.2368C156.013 19.5658 154.526 18.2237 152.737 17.3553C150.855 16.4605 148.789 16 146.697 16.0263C143.711 15.9474 140.803 17 138.592 18.9737C136.276 21.1447 134.895 24.1184 134.763 27.2632H158.658C158.711 25.1447 158.158 23.0526 157.066 21.2237L157.053 21.2368ZM200.355 14.8421C203.211 17.5921 204.632 21.5395 204.632 26.6974V48.6447H198.421V27.5789C198.421 23.8684 197.487 21.0263 195.592 19.0526C194.592 18.0526 193.382 17.2763 192.039 16.7632C190.711 16.25 189.276 16.0263 187.855 16.1053C186.395 16.0395 184.934 16.2763 183.566 16.8026C182.197 17.3289 180.974 18.1316 179.947 19.1711C177.947 21.2105 176.974 24.1842 177 28.0789V48.6974H170.711V11.4211H177V16.7237C178.25 14.8158 180 13.2895 182.079 12.3026C184.289 11.25 186.711 10.7105 189.158 10.7368C191.211 10.6447 193.25 10.9737 195.171 11.6711C197.092 12.3816 198.855 13.4474 200.342 14.8421H200.355ZM239.434 1.28947V6.32895H218.487V22.3158H235.447V27.3553H218.487V48.6842H212.197V1.28947H239.434ZM278.658 32.3421H248.395C248.395 33.9079 248.724 35.4605 249.342 36.9079C249.974 38.3553 250.882 39.6579 252.026 40.75C253.171 41.8421 254.526 42.6974 256.026 43.2632C257.513 43.8289 259.105 44.0921 260.697 44.0395C263.105 44.1184 265.487 43.4737 267.5 42.1711C269.289 40.9605 270.632 39.2105 271.329 37.1711H278.092C277.132 40.6842 275 43.7632 272.013 45.9079C268.724 48.2237 264.737 49.4079 260.697 49.2763C257.329 49.3289 254 48.5132 251.066 46.8947C248.237 45.3158 245.921 42.9737 244.408 40.1447C242.763 37.0132 241.934 33.5132 242.026 29.9868C241.947 26.4737 242.75 22.9868 244.368 19.8553C245.855 17.0395 248.145 14.7105 250.961 13.1579C253.961 11.5526 257.329 10.75 260.737 10.8158C264.066 10.75 267.355 11.5526 270.263 13.1316C272.961 14.6184 275.184 16.8158 276.658 19.4868C278.171 22.3026 278.947 25.4474 278.895 28.6316C278.895 29.8816 278.803 31.1316 278.658 32.3684V32.3421ZM270.776 21.2368C269.737 19.5789 268.25 18.25 266.461 17.3947C264.579 16.5 262.513 16.0395 260.421 16.0658C257.434 15.9868 254.526 17.0395 252.316 19.0132C250 21.1842 248.618 24.1579 248.474 27.3026H272.421C272.474 25.1711 271.895 23.0658 270.789 21.2237L270.776 21.2368ZM284.447 19.8816C285.921 17.1053 288.158 14.7763 290.908 13.1842C293.684 11.5789 296.855 10.7632 300.066 10.8026C303.079 10.7368 306.066 11.4605 308.697 12.9079C310.974 14.1447 312.868 15.9868 314.158 18.2105V11.4211H320.513V48.6579H314.158V41.7237C312.829 43.9868 310.908 45.8553 308.605 47.1316C305.987 48.5921 303.013 49.3289 300 49.2763C296.803 49.3158 293.658 48.4737 290.908 46.8553C288.171 45.1842 285.947 42.8158 284.487 39.9868C282.882 36.8816 282.079 33.4211 282.145 29.9342C282.053 26.4474 282.855 23 284.461 19.8947L284.447 19.8816ZM312.382 22.6316C311.316 20.6316 309.697 18.9737 307.724 17.8421C305.75 16.7632 303.539 16.1974 301.289 16.1974C299.039 16.1974 296.816 16.7632 294.855 17.8421C292.882 18.9605 291.276 20.6184 290.224 22.6053C289.026 24.8684 288.434 27.3947 288.5 29.9474C288.434 32.5263 289.026 35.0921 290.224 37.3816C291.276 39.3816 292.882 41.0526 294.855 42.1974C296.803 43.3158 299.013 43.8947 301.276 43.8684C303.539 43.8816 305.776 43.3158 307.737 42.1974C309.724 41.0526 311.342 39.3816 312.395 37.3816C313.579 35.1053 314.184 32.5658 314.118 30.0132C314.197 27.4474 313.618 24.9079 312.434 22.6316H312.395H312.382ZM336.105 16.5132V38.4605C336.039 39.1447 336.105 39.8421 336.303 40.5C336.5 41.1579 336.842 41.7763 337.276 42.3026C338.053 43.0526 339.421 43.4211 341.355 43.4211H345.974V48.6579H340.316C336.816 48.6579 334.184 47.8684 332.434 46.2763C330.684 44.6842 329.816 42.0789 329.816 38.4211V16.5132H324.921V11.4211H329.803V2.02632H336.092V11.4079H345.974V16.5H336.105V16.5132ZM384.447 11.4211V48.6579H378.158V43.1579C376.947 45.0789 375.224 46.6184 373.171 47.6053C370.974 48.6842 368.553 49.2237 366.092 49.2105C363.316 49.2632 360.579 48.6447 358.105 47.4079C355.737 46.1974 353.803 44.3158 352.539 42.0132C351.118 39.3026 350.434 36.2895 350.539 33.25V11.4211H356.724V32.4211C356.724 36.0921 357.671 38.9079 359.553 40.8816C360.553 41.8816 361.763 42.6579 363.092 43.1711C364.421 43.6842 365.855 43.9079 367.276 43.8289C368.75 43.9079 370.224 43.6711 371.605 43.1447C372.987 42.6184 374.224 41.8026 375.263 40.7632C377.184 38.7368 378.158 35.7632 378.158 31.8553V11.4211H384.421H384.447ZM403.408 12.4868C405.697 11.25 408.289 10.6316 410.895 10.7237V17.1053H409.237C402.184 17.1053 398.658 20.8684 398.658 28.3816V48.6316H392.368V11.4211H398.618V17.4737C399.671 15.3947 401.329 13.6579 403.382 12.5L403.408 12.4868ZM449.776 32.3421H419.526C419.526 33.9079 419.842 35.4605 420.474 36.9079C421.092 38.3553 422.013 39.6579 423.158 40.75C424.303 41.8421 425.658 42.6974 427.158 43.2632C428.645 43.8289 430.237 44.0921 431.829 44.0395C434.237 44.1316 436.618 43.4737 438.632 42.1711C440.434 40.9605 441.776 39.2105 442.461 37.1711H449.237C448.276 40.6711 446.132 43.75 443.158 45.9079C439.855 48.2237 435.882 49.4079 431.829 49.2763C428.461 49.3289 425.145 48.5132 422.197 46.8947C419.368 45.3158 417.053 42.9737 415.539 40.1447C413.868 37.0132 413.039 33.5132 413.118 29.9868C413.039 26.4737 413.855 22.9868 415.474 19.8553C416.961 17.0395 419.25 14.7105 422.066 13.1579C425.053 11.5526 428.421 10.75 431.829 10.8158C435.158 10.75 438.447 11.5526 441.368 13.1316C444.066 14.6053 446.276 16.8158 447.75 19.4868C449.276 22.3026 450.053 25.4474 450 28.6316C450 29.8816 449.921 31.1316 449.789 32.3684L449.776 32.3421ZM441.908 21.2368C440.868 19.5658 439.342 18.2368 437.553 17.3947C435.684 16.5 433.645 16.0526 431.566 16.0658C428.579 15.9868 425.671 17.0395 423.447 19.0132C421.132 21.1842 419.75 24.1579 419.618 27.3026H443.566C443.605 25.1711 443.039 23.0658 441.921 21.2237L441.908 21.2368Z"
                    fill="#fff"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_53_2">
                    <rect width="450" height="66.3421" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </h1>
            <p className="text-xl text-gray-200 mb-8" data-aos="fade-up" data-aos-delay="200">
              Standardizing Feature Flagging for Everyone
            </p>
            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div data-aos="fade-up" data-aos-delay="400">
                <a
                  className="btn text-white hover:text-white bg-green-600 hover:bg-green-700 hover:no-underline w-full mb-4 sm:w-auto sm:mb-0"
                  href="https://docs.openfeature.dev/docs/category/concepts"
                  target="_blank"
                >
                  Learn more
                </a>
              </div>
              <div data-aos="fade-up" data-aos-delay="600">
                <a
                  className="btn text-gray-900 hover:text-gray-900 bg-gray-100 hover:bg-gray-300 hover:no-underline w-full sm:w-auto sm:ml-4"
                  href="https://killercoda.com/open-feature/scenario/five-minutes-to-feature-flags"
                  target="_blank"
                >
                  Get started
                </a>
              </div>
            </div>
          </div>

          {/* Video */}
          <div>
            {/* <div className="relative flex justify-center items-center" data-aos="fade-up" data-aos-delay="200">
              <img className="mx-auto" src={HeroImage} width="1024" height="504" alt="Hero" />
              <a
                className="absolute group"
                href="#0"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setVideoModalOpen(true);
                }}
                aria-controls="modal"
              >
                <svg
                  className="w-16 h-16 sm:w-20 sm:h-20 hover:opacity-75 transition duration-150 ease-in-out"
                  viewBox="0 0 88 88"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient x1="78.169%" y1="9.507%" x2="24.434%" y2="90.469%" id="a">
                      <stop stopColor="#EBF1F5" stopOpacity=".8" offset="0%" />
                      <stop stopColor="#EBF1F5" offset="100%" />
                    </linearGradient>
                  </defs>
                  <circle fill="url(#a)" cx="44" cy="44" r="44" />
                  <path
                    className="fill-current text-purple-600"
                    d="M52 44a.999.999 0 00-.427-.82l-10-7A1 1 0 0040 37V51a.999.999 0 001.573.82l10-7A.995.995 0 0052 44V44c0 .001 0 .001 0 0z"
                  />
                </svg>
              </a>
            </div> */}

            {/* Modal */}
            <Modal
              id="modal"
              ariaLabel="modal-headline"
              show={videoModalOpen}
              handleClose={() => setVideoModalOpen(false)}
            >
              <div className="relative pb-9/16">
                <video ref={video} className="absolute w-full h-full" width="1920" height="1080" loop autoPlay controls>
                  <source src="/videos/video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
