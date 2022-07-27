import type { Props } from '@/pages/_error';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { lang } from '@/lib/lang';

const Page404 = ({ statusCode }: Props) => {
  const { locale } = useRouter();
  const t = lang[locale as 'zh' | 'en'];
  return (
    <div className="py-6 sm:py-8 lg:py-12">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <div className="flex flex-col items-center">
          <div className="inline-flex items-center gap-2.5 mb-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <defs>
                <rect id="path_0" x="0" y="0" width="24" height="24" />
              </defs>
              <g opacity="1" transform="translate(0 0)  rotate(0 12 12)">
                <mask id="bg-mask-0" fill="white">
                  <use xlinkHref="#path_0"></use>
                </mask>
                <g mask="url(#bg-mask-0)">
                  <path
                    id="分组 1"
                    fillRule="evenodd"
                    style={{ fill: '#808080' }}
                    transform="translate(0.001033913103376527 -2.343750260536126e-8)  rotate(0 11.99133631039999 11.991318292968751)"
                    opacity="1"
                    d="M12.3237 15.5082C12.3237 15.3282 12.1736 15.1782 11.9937 15.1782C11.8137 15.1782 11.6637 15.3282 11.6637 15.5082C11.6637 16.2382 11.0637 16.8382 10.3337 16.8382C9.60365 16.8382 9.01365 16.2382 9.01365 15.5082C9.01365 15.3282 8.86365 15.1782 8.68365 15.1782C8.50365 15.1782 8.35365 15.3282 8.35365 15.5082C8.35365 16.6082 9.24365 17.5082 10.3337 17.5082C11.4337 17.5082 12.3237 16.6082 12.3237 15.5082Z M15.6309 15.5082C15.6309 15.3282 15.4809 15.1782 15.3009 15.1782C15.1209 15.1782 14.9709 15.3282 14.9709 15.5082C14.9709 16.2382 14.3709 16.8382 13.6409 16.8382C12.9109 16.8382 12.3209 16.2382 12.3209 15.5082C12.3209 15.3282 12.1709 15.1782 11.9909 15.1782C11.8109 15.1782 11.6609 15.3282 11.6609 15.5082C11.6609 16.6082 12.5509 17.5082 13.6409 17.5082C14.7409 17.5082 15.6309 16.6082 15.6309 15.5082Z M7.35858 12.6884C8.08858 12.6884 8.68858 12.0884 8.68858 11.3584C8.68858 10.6284 8.08858 10.0284 7.35858 10.0284C6.62858 10.0284 6.03858 10.6284 6.03858 11.3584C6.03858 12.0884 6.62858 12.6884 7.35858 12.6884Z M16.6188 12.6884C17.3488 12.6884 17.9488 12.0884 17.9488 11.3584C17.9488 10.6284 17.3488 10.0284 16.6188 10.0284C15.8888 10.0284 15.2988 10.6284 15.2988 11.3584C15.2988 12.0884 15.8888 12.6884 16.6188 12.6884Z M18.9023 17.4908C18.9823 17.3208 18.9223 17.1208 18.7523 17.0408L17.4323 16.3808C17.2723 16.2908 17.0723 16.3608 16.9923 16.5208C16.9023 16.6908 16.9723 16.8908 17.1323 16.9708L18.4623 17.6308C18.5023 17.6608 18.5523 17.6708 18.6023 17.6708C18.7223 17.6708 18.8423 17.6008 18.9023 17.4908Z M20.2553 15.421C20.2553 15.241 20.1153 15.101 19.9253 15.101L18.6053 15.101C18.4253 15.101 18.2753 15.241 18.2753 15.421C18.2753 15.611 18.4253 15.751 18.6053 15.751L19.9253 15.751C20.1153 15.751 20.2553 15.611 20.2553 15.421Z M5.37836 17.6309L6.69836 16.9709C6.86836 16.8909 6.92836 16.6909 6.84836 16.5209C6.76836 16.3609 6.56836 16.2909 6.40836 16.3809L5.07836 17.0409C4.91836 17.1209 4.84836 17.3209 4.93836 17.4909C4.98836 17.6009 5.10836 17.6709 5.22836 17.6709C5.27836 17.6709 5.32836 17.6609 5.37836 17.6309Z M5.70352 15.421C5.70352 15.241 5.56351 15.101 5.37351 15.101L4.05351 15.101C3.87351 15.101 3.72351 15.241 3.72351 15.421C3.72351 15.611 3.87351 15.751 4.05351 15.751L5.37351 15.751C5.56351 15.751 5.70352 15.611 5.70352 15.421Z M23.04 9.41C23.11 9.33 23.18 9.24 23.21 9.12C24.07 5.98 24.35 1.05 22.8 0.11C22.62 0.03 22.39 0 22.1 0C20.47 0 17.32 1.13 16.39 1.47C16.34 1.49 16.3 1.53 16.26 1.56C14.96 1.02 13.54 0.73 11.99 0.73C10.46 0.73 9.05 1.01 7.77 1.53C7.74 1.51 7.71 1.49 7.67 1.47C6.75 1.13 3.6 0 1.97 0C1.68 0 1.45 0.03 1.26 0.11C-0.28 1.05 0 5.98 0.86 9.12C0.88 9.21 0.92 9.28 0.97 9.35C0.55 10.58 0.25 11.93 0.09 13.35C-0.8 20.76 5.38 23.98 11.99 23.98C18.57 23.98 24.79 20.76 23.9 13.35C23.73 11.95 23.44 10.63 23.04 9.41Z M17.8432 2.38056C19.6932 3.55056 21.1832 5.30056 22.2332 7.47056C22.8332 4.44056 22.6032 1.72056 22.2532 1.33056C22.2232 1.33056 22.1632 1.32056 22.0932 1.32056C21.2832 1.32056 19.3732 1.86056 17.8432 2.38056Z M1.8054 7.33056C2.8554 5.21056 4.3354 3.51056 6.1554 2.36056C4.6354 1.85056 2.7754 1.32056 1.9754 1.32056C1.9054 1.32056 1.8454 1.33056 1.8154 1.33056C1.4754 1.71056 1.2454 4.36056 1.8054 7.33056Z M22.5844 13.5145C21.7544 6.44447 17.7044 2.05447 11.9944 2.05447C6.03437 2.05447 2.26437 6.44447 1.44437 13.5145C1.15437 15.9045 1.66437 17.8945 3.01437 19.4145C4.82437 21.4745 8.02437 22.6545 11.9944 22.6545C15.8944 22.6545 19.1744 21.4745 20.9944 19.4145C22.3344 17.8945 22.8744 15.9045 22.5844 13.5145Z "
                  />
                </g>
              </g>
            </svg>
          </div>

          <p className="text-sm md:text-base font-semibold uppercase mb-4">
            {t.ERROR.MESSAGE}
          </p>
          <h1 className="text-gray-800 text-2xl md:text-3xl font-bold text-center mb-2">
            {statusCode
              ? `${statusCode} - ${t.ERROR.TITLE}`
              : `Error - ${t.ERROR.TITLE}`}
          </h1>

          <p className="max-w-screen-md text-gray-500 md:text-lg text-center mb-12">
            {t.ERROR.HELP_TEXT}
          </p>

          <Link href="/">
            <a className="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
              {t.ERROR.BACK_TO_HOME}
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page404;