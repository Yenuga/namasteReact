export const fetchData = async () => {
  const data = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4467223&lng=78.3511978&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTIN",
  );
  const dataJson = await data.json();
  return dataJson;
};
