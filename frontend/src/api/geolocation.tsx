import axios from "axios";

export const getAddressFromCoords = async (lat: number, long: number) => {
  try {
    const res = await axios.get(
      `https://dapi.kakao.com/v2/local/geo/coord2regioncode.json`,
      {
        params: {
          x: lat, // 경도
          y: long, // 위도
        },
        headers: {
          Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_KEY}`,
        },
      }
    );

    const region = res.data.documents[0];
    return `${region.region_1depth_name} ${region.region_2depth_name} ${region.region_3depth_name}`;
  } catch (err) {
    console.error("Geolocation API Error:", err);
    return "불러오기 실패";
  }
};
