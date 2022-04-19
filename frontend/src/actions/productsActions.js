import axios from "axios";
import {
  ALL_PRODUCTS_REQUEST,
  ALL_PRODUCTS_SUCCESS,
  ALL_PRODUCTS_FAIL,
  CLEAR_ERRORS,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  NEW_REVIEW_REQUEST,
  NEW_REVIEW_SUCCESS,
  NEW_REVIEW_FAIL,
} from "../constants/productConstants";

export const getProducts =
  (keyword = "", page = 1, price, category, rating = 0) =>
  async (dispatch) => {
    try {
      dispatch({ type: ALL_PRODUCTS_REQUEST });

      let url =
        "/api/v1/products?keyword=" +
        keyword +
        "&page=" +
        page +
        "&price[lte]=" +
        price[1] +
        "&price[gte]=" +
        price[0] +
        "&ratings[gte]=" +
        rating;

      if (category) {
        url =
          "/api/v1/products?keyword=" +
          keyword +
          "&page=" +
          page +
          "&price[lte]=" +
          price[1] +
          "&price[gte]=" +
          price[0] +
          "&category=" +
          category +
          "&ratings[gte]=" +
          rating;
      }

      const { data } = await axios.get(url);
      dispatch({
        type: ALL_PRODUCTS_SUCCESS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: ALL_PRODUCTS_FAIL,
        payload: err.response.data.message,
      });
    }
  };

export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });

    const { data } = await axios.get("/api/v1/products/" + id);
    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload: err.response.data.message,
    });
  }
};

export const createReview = (id, reviewData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_REVIEW_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.put(
      "/api/v1/products/" + id + "/review",
      reviewData,
      config
    );
    dispatch({
      type: NEW_REVIEW_SUCCESS,
      payload: data.success,
    });
  } catch (err) {
    dispatch({
      type: NEW_REVIEW_FAIL,
      payload: err.response.data.message,
    });
  }
};

export const clearProductErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
