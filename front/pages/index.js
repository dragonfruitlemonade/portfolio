import React from "react";
// import { useDispatch } from "react-redux";

// import IndexLayout from "../components/IndexLayout";
// import { LOAD_MY_INFO_REQUEST } from "../reducers/user";
// import { END } from "redux-saga";
// import axios from "axios";
// import wrapper from "../store/configureStore";

const Home = () => {
  // const dispatch = useDispatch();

  return (
    <IndexLayout>
      <div>메인</div>
    </IndexLayout>
  );
};

// export const getServerSideProps = wrapper.getServerSideProps(
//   async (context) => {
//     const cookie = context.req ? context.req.headers.cookie : "";
//     axios.defaults.headers.Cookie = "";
//     if (context.req && cookie) {
//       axios.defaults.headers.Cookie = cookie;
//     }
//     axios.defaults.headers.Cookie = cookie;
//     context.store.dispatch({
//       type: LOAD_MY_INFO_REQUEST,
//     });
//     context.store.dispatch(END);
//     await context.store.sagaTask.toPromise();
//   }
// );

export default Home;
