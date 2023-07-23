import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getAllusers } from "../store/userSlice/userDetailSlice";
import { Link } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllusers());
  }, [dispatch]);

  const { users, loading } = useSelector((store) => store.users);
  const handleDelete = (id) => {
    dispatch(deleteUser(id));
    dispatch(getAllusers());

  };
  console.log("usersss", users);
  if (loading === true && !users) return <h1>Loading......</h1>;
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -mx-4 -my-8">
            {users &&
              users.map((i) => (
                <div key={i.id} class="py-4 px-2 lg:w-1/3 border">
                  <div class="h-full flex items-start">
                    <div class="flex-grow px-10">
                      <h2 class="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">
                        {i.name}
                      </h2>
                      <h1 class="title-font text-xl font-medium text-gray-900 mb-3">
                        {i.email}
                      </h1>
                      <p class="leading-relaxed mb-5">{i.age}</p>
                      <span class="inline-flex items-center">
                        <img
                          alt="blog"
                          src="https://dummyimage.com/103x103"
                          class="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"
                        />
                        <span class="flex-grow flex flex-col pl-3">
                          <span class="title-font font-medium text-gray-900">
                            {i.gender}
                          </span>
                        </span>
                      </span>
                      <div className="flex mt-3">
                      <Link className=" text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded" to={`/update-user/${i.id}`}>Update</Link>
                      <button
                        onClick={() => handleDelete(i.id)}
                        className="ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
                        >
                        Delete
                      </button>
                        </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
