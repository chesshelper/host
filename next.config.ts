import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  images: {
    unoptimized: false,
  },
  async redirects() {
    return [
      {
        source: "/ch/update",
        destination: "/products/chesshelper/update",
        permanent: true, 
      },
      {
        source: "/lc/update",
        destination: "/products/lichesshelper/update",
        permanent: true, 
      },
      {
        source: "/igp/update",
        destination: "/products/igplus/update",
        permanent: true, 
      },
      {
        source: "/sp/update",
        destination: "/products/spoplus/update",
        permanent: true, 
      },
      {
        source: "/ec/update",
        destination: "/products/easycalc/update",
        permanent: true,
      },
      {
        source: "/memento/update",
        destination: "/products/memento/update",
        permanent: true,
      },

      {
        source: "/ch/welcome",
        destination: "/products/chesshelper/welcome",
        permanent: true, 
      },
      {
        source: "/lc/welcome",
        destination: "/products/lichesshelper/welcome",
        permanent: true, 
      },
      {
        source: "/igp/welcome",
        destination: "/products/igplus/welcome",
        permanent: true, 
      },
      {
        source: "/sp/welcome",
        destination: "/products/spoplus/welcome",
        permanent: true, 
      },
      {
        source: "/ec/welcome",
        destination: "/products/easycalc/welcome",
        permanent: true,
      },
      {
        source: "/memento/welcome",
        destination: "/products/memento/welcome",
        permanent: true,
      },


      {
        source: "/ch",
        destination: "/products/chesshelper/",
        permanent: true, 
      },
      {
        source: "/lc",
        destination: "/products/lichesshelper/",
        permanent: true, 
      },
      {
        source: "/igp",
        destination: "/products/igplus/",
        permanent: true, 
      },
      {
        source: "/sp/",
        destination: "/products/spoplus/",
        permanent: true, 
      },
      {
        source: "/ec",
        destination: "/products/easycalc/",
        permanent: true,
      },
      {
        source: "/memento",
        destination: "/products/memento/",
        permanent: true,
      },
      {
        source: "/dohabit",
        destination: "/products/dohabit/",
        permanent: true,
      },

      // LANGUAGE RELATED PATHS - DOWN BELOW

      {
        source: "/ch/en",
        destination: "/en/products/chesshelper/",
        permanent: true, 
      },
      {
        source: "/lc/en",
        destination: "/en/products/lichesshelper/",
        permanent: true, 
      },
      {
        source: "/igp/en",
        destination: "/en/products/igplus/",
        permanent: true, 
      },
      {
        source: "/sp/en",
        destination: "/en/products/spoplus/",
        permanent: true, 
      },
      {
        source: "/ec/en",
        destination: "/en/products/easycalc/",
        permanent: true,
      },
      {
        source: "/memento/en",
        destination: "/en/products/memento/",
        permanent: true,
      },

      {
        source: "/ch/pl",
        destination: "/pl/products/chesshelper/",
        permanent: true, 
      },
      {
        source: "/lc/pl",
        destination: "/pl/products/lichesshelper/",
        permanent: true, 
      },
      {
        source: "/igp/pl",
        destination: "/pl/products/igplus/",
        permanent: true, 
      },
      {
        source: "/sp/pl",
        destination: "/pl/products/spoplus/",
        permanent: true, 
      },
      {
        source: "/ec/pl",
        destination: "/pl/products/easycalc/",
        permanent: true,
      },
      {
        source: "/memento/pl",
        destination: "/pl/products/memento/",
        permanent: true,
      },



      {
        source: "/ch/ru",
        destination: "/ru/products/chesshelper/",
        permanent: true, 
      },
      {
        source: "/lc/ru",
        destination: "/ru/products/lichesshelper/",
        permanent: true, 
      },
      {
        source: "/igp/ru",
        destination: "/ru/products/igplus/",
        permanent: true, 
      },
      {
        source: "/sp/ru",
        destination: "/ru/products/spoplus/",
        permanent: true, 
      },
      {
        source: "/ec/ru",
        destination: "/ru/products/easycalc/",
        permanent: true,
      },
      {
        source: "/memento/ru",
        destination: "/ru/products/memento/",
        permanent: true,
      },


      {
        source: "/ch/uk",
        destination: "/uk/products/chesshelper/",
        permanent: true, 
      },
      {
        source: "/lc/uk",
        destination: "/uk/products/lichesshelper/",
        permanent: true, 
      },
      {
        source: "/igp/uk",
        destination: "/uk/products/igplus/",
        permanent: true, 
      },
      {
        source: "/sp/uk",
        destination: "/uk/products/spoplus/",
        permanent: true, 
      },
      {
        source: "/ec/uk",
        destination: "/uk/products/easycalc/",
        permanent: true,
      },
      {
        source: "/memento/uk",
        destination: "/uk/products/memento/",
        permanent: true,
      },

      {
        source: "/ch/de",
        destination: "/de/products/chesshelper/",
        permanent: true, 
      },
      {
        source: "/lc/de",
        destination: "/de/products/lichesshelper/",
        permanent: true, 
      },
      {
        source: "/igp/de",
        destination: "/de/products/igplus/",
        permanent: true, 
      },
      {
        source: "/sp/de",
        destination: "/de/products/spoplus/",
        permanent: true, 
      },
      {
        source: "/ec/de",
        destination: "/de/products/easycalc/",
        permanent: true,
      },
      {
        source: "/memento/de",
        destination: "/de/products/memento/",
        permanent: true,
      },

      {
        source: "/ch/be",
        destination: "/be/products/chesshelper/",
        permanent: true, 
      },
      {
        source: "/lc/be",
        destination: "/be/products/lichesshelper/",
        permanent: true, 
      },
      {
        source: "/igp/be",
        destination: "/be/products/igplus/",
        permanent: true, 
      },
      {
        source: "/sp/be",
        destination: "/be/products/spoplus/",
        permanent: true, 
      },
      {
        source: "/ec/be",
        destination: "/be/products/easycalc/",
        permanent: true,
      },
      {
        source: "/memento/be",
        destination: "/be/products/memento/",
        permanent: true,
      },

      {
        source: "/ch/pt",
        destination: "/pt/products/chesshelper/",
        permanent: true, 
      },
      {
        source: "/lc/pt",
        destination: "/pt/products/lichesshelper/",
        permanent: true, 
      },
      {
        source: "/igp/pt",
        destination: "/pt/products/igplus/",
        permanent: true, 
      },
      {
        source: "/sp/pt",
        destination: "/pt/products/spoplus/",
        permanent: true, 
      },
      {
        source: "/ec/pt",
        destination: "/pt/products/easycalc/",
        permanent: true,
      },
      {
        source: "/memento/pt",
        destination: "/pt/products/memento/",
        permanent: true,
      },

      {
        source: "/ch/ar",
        destination: "/ar/products/chesshelper/",
        permanent: true, 
      },
      {
        source: "/lc/ar",
        destination: "/ar/products/lichesshelper/",
        permanent: true, 
      },
      {
        source: "/igp/ar",
        destination: "/ar/products/igplus/",
        permanent: true, 
      },
      {
        source: "/sp/ar",
        destination: "/ar/products/spoplus/",
        permanent: true, 
      },
      {
        source: "/ec/ar",
        destination: "/ar/products/easycalc/",
        permanent: true,
      },
      {
        source: "/memento/ar",
        destination: "/ar/products/memento/",
        permanent: true,
      },

      {
        source: "/ch/hi",
        destination: "/hi/products/chesshelper/",
        permanent: true, 
      },
      {
        source: "/lc/hi",
        destination: "/hi/products/lichesshelper/",
        permanent: true, 
      },
      {
        source: "/igp/hi",
        destination: "/hi/products/igplus/",
        permanent: true, 
      },
      {
        source: "/sp/hi",
        destination: "/hi/products/spoplus/",
        permanent: true, 
      },
      {
        source: "/ec/hi",
        destination: "/hi/products/easycalc/",
        permanent: true,
      },
      {
        source: "/memento/hi",
        destination: "/hi/products/memento/",
        permanent: true,
      },
  
    ];
  },
  basePath: "",
};

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");
export default withNextIntl(nextConfig);
