export const useBannerData = pathName => {
  const bannerDatas = [
    {
      pathName: "/",
      title: null,
      imgPath: "images/home/banner.jpg",
    },
    {
      pathName: "/about-us",
      title: "About Us",
      imgPath: "images/about/banner.jpg",
    },
    {
      pathName: "/overview",
      title: null,
      imgPath: "images/business1/banner.jpg",
    },
    {
      pathName: "/medical-systems-solutions",
      title: "Medical Systems & Solutions",
      imgPath: "images/business2/banner.jpg",
    },
    {
      pathName: "/pharmaceuticals",
      title: "Pharmaceuticals",
      imgPath: "images/business3/banner.jpg",
    },
    {
      pathName: "/laundry-solutions",
      title: "Laundry & Hygiene Solutions",
      imgPath: "images/business4/banner.jpg",
    },
    {
      pathName: "/commercial-catering-solutions",
      title: "Commercial Catering Solutions",
      imgPath: "images/business5/banner.jpg",
    },
    {
      pathName: "/after-sales-service",
      title: "After Sales Service",
      imgPath: "images/business6/banner.jpg",
    },
    {
      pathName: "/project-engineering-and-consulting",
      title: "Project Engineering & Consulting",
      imgPath: "images/business7/banner.jpg",
    },
    {
      pathName: "/careers",
      title: "Careers",
      imgPath: "images/careers/banner.png",
    },
  ]

  return bannerDatas
    .filter(x => x.pathName === pathName)
    .reduce(
      (acc, value) => {
        acc[0] = value.title
        acc[1] = value.imgPath
        return acc
      },
      [null, null]
    )
}
