export const fetchData = async () => {
  const data = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4467223&lng=78.3511978&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTIN",
  );
  const dataJson = await data.json();
  const pageOffset = dataJson?.data?.pageOffset;
  const cardData = dataJson?.data?.cards?.filter((card) => {
    return card?.card?.card?.id === "restaurant_grid_listing_v2";
  });
  const resData =
    cardData[0].card?.card?.gridElements?.infoWithStyle?.restaurants;

  return { pageOffset, resData };
};

const payload = {
  lat: "17.4467223",
  lng: "78.3511978",
  nextOffset: "CJhlELQ4KICI3femq/mFbTCnEzgD",
  widgetOffset: {
    NewListingView_category_bar_chicletranking_TwoRows: "",
    NewListingView_category_bar_chicletranking_TwoRows_Rendition: "",
    Restaurant_Group_WebView_PB_Theme: "",
    Restaurant_Group_WebView_SEO_PB_Theme: "",
    collectionV5RestaurantListWidget_SimRestoRelevance_food_seo: "9",
    inlineFacetFilter: "",
    restaurantCountWidget: "",
  },
  filters: {},
  seoParams: {
    seoUrl: "https://www.swiggy.com/restaurants",
    pageType: "FOOD_HOMEPAGE",
    apiName: "FoodHomePage",
    businessLine: "FOOD",
  },
  page_type: "DESKTOP_WEB_LISTING",
  _csrf: "2lqroPvLYc7Z-pypkOVc8-12ON70drBUPuxAB_Fg",
};

export const updateNextResList = async () => {
  const data = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/update",
    {
      method: "POST",
      body: JSON.stringify(payload),
    },
  );
  const datae = await data.json();

  console.log(datae);
};
