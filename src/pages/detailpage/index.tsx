import Detailbar from "@/Components/Modules/DetailBar/Detailbar";
import Tags from "@/Components/Modules/Tags/Tags";
import React, { FC } from "react";
import image from "../../Assets/verticalblog.png";
import Image from "next/image";
import HorizontalLine from "@/Components/Modules/HorzontalLine/HorizontalLine";
import avater from "../../Assets/avater.png";
import image1 from "../../Assets/shows.png";
import image2 from "../../Assets/Rectangle 10.png";
import image3 from "../../Assets/blogimg2.png";
import { AiOutlineSend } from "react-icons/ai";
import {
  FaCommentAlt,
  FaHeart,
  FaShare,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaArrowRight,
} from "react-icons/fa";
import { SmallVerticalBLogCard } from "@/Components/Modules/BlogCard/BlogCard";
import CommentCard from "@/Components/Modules/CommentCard/CommentCard";

interface Props {}

const DetailPage: FC<Props> = () => {
  return (
    <section className="px-10 py-10 ">
      <div className="grid grid-cols-5 gap-6">
        <div className="col-span-3">
          <Tags title="LIFESTYLE" background="bg-blue-500"></Tags>
          <h1 className="2xl:text-6xl lg:text-4xl my-4 text-zinc-800 font-bold">
            The World Caters to Average People and Mediocre Lifestyles
          </h1>
          <Detailbar
            author="Jhon"
            date="12 Jan 2023"
            views="11k"
            time={4}
          ></Detailbar>

          <HorizontalLine />

          <Image src={image} alt="" className="w-full  my-4" />
        </div>
        <div className=" col-span-2 py-10 px-4">
          <div className="h-20 2xl:mb-32 lg:mb-20 w-full animate-pulse bg-slate-300"></div>
          <h1 className="2xl:text-4xl lg:text-3xl text-zinc-800 font-bold  2xl:my-10 lg:my-6 uppercase">
            Outline of this Blog
          </h1>
          <p className="text-zinc-800 2xl:text-lg lg:text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            numquam atque suscipit soluta, sapiente ipsum? Laborum earum minus
            doloremque ullam dignissimos officiis dicta molestias, ipsam illum
            ad quibusdam ipsum dolor voluptate. Hic facere sunt, quod fugiat,
            neque, nemo vel excepturi consequuntur minima aliquam nesciunt!
            Dolorum.
          </p>

          <HorizontalLine />

          <div className="flex gap-x-6 items-center">
            <p className="flex text-lg font-medium text-zinc-700 gap-2 items-center">
              {" "}
              <FaCommentAlt /> 12 Comments
            </p>
            <p className="flex text-lg font-medium text-zinc-700 gap-2 items-center">
              {" "}
              <FaHeart /> 12 Likes
            </p>
            <p className="flex text-lg font-medium text-zinc-700 gap-2 items-center">
              {" "}
              <FaShare /> 12 Share
            </p>
          </div>
          <HorizontalLine />

          <div className="flex my-4 justify-between items-center">
            <div>
              <p>Author</p>
              <h1 className="2xl:text-2xl lg:text-xl font-semibold">
                Hello , I am Jhon
              </h1>
            </div>
            <Image className="w-20 lg:w-16 " src={avater} alt="" />
          </div>
          <p className="2xl:text-lg lg:text-sm">
            You should write because you love the shape of stories and sentences
            and the creation of different words on a page. Writing comes from
            reading, and reading is the finest teacher of how to write.
          </p>

          <div className="my-4 lg:text-lg 2xl:text-xl flex justify-between items-center">
            <div>
              <p className="font-semibold">Follow me on Social Media</p>
              <div className="flex items-center gap-x-4 my-2 text-zinc-600 text-xl">
                <FaFacebook />
                <FaInstagram />
                <FaTwitter />
              </div>
            </div>

            <p className="flex gap-x-3 items-center text-zinc-700 font-semibold cursor-pointer">
              Contact Me <FaArrowRight />
            </p>
          </div>

          <HorizontalLine />
        </div>
      </div>

      <div className="grid gap-5 py-5 grid-cols-5">
        <div className="col-span-4">
          <p className="2xl:text-xl lg:text-lg">
            Uninhibited carnally hired played in whimpered dear gorilla koala
            depending and much yikes off far quetzal goodness and from for
            grimaced goodness unaccountably and meadowlark near unblushingly
            crucial scallop tightly neurotic hungrily some and dear furiously
            this apart. Uninhibited carnally hired played in whimpered dear
            gorilla koala depending and much yikes off far quetzal goodness and
            from for grimaced goodness unaccountably and meadowlark near
            unblushingly crucial scallop tightly neurotic hungrily some and dear
            furiously this apart. Spluttered narrowly yikes left moth in yikes
            bowed this that grizzly much hello on spoon-fed that alas rethought
            much decently richly and wow against the frequent fluidly at
            formidable acceptably flapped besides and much circa far over the
            bucolically hey precarious goldfinch mastodon goodness gnashed a
            jellyfish and one however because.
          </p>
          <div className="grid my-6 grid-cols-3 gap-6 ">
            <Image src={image1} className="w-full h-full" alt=""></Image>
            <Image src={image2} className="w-full h-full" alt=""></Image>
            <Image src={image3} className="w-full h-full" alt=""></Image>
          </div>
          <p className="2xl:text-xl lg:text-lg">
            Uninhibited carnally hired played in whimpered dear gorilla koala
            depending and much yikes off far quetzal goodness and from for
            grimaced goodness unaccountably and meadowlark near unblushingly
            crucial scallop tightly neurotic hungrily some and dear furiously
            this apart. Uninhibited carnally hired played in whimpered dear
            gorilla koala depending and much yikes off far quetzal goodness and
            from for grimaced goodness unaccountably and meadowlark near
            unblushingly crucial scallop tightly neurotic hungrily some and dear
            furiously this apart. Spluttered narrowly yikes left moth in yikes
            bowed this that grizzly much hello on spoon-fed that alas rethought
            much decently richly and wow against the frequent fluidly at
            formidable acceptably flapped besides and much circa far over the
            bucolically hey precarious goldfinch mastodon goodness gnashed a
            jellyfish and one however because.
          </p>

          <h1 className="text-2xl my-4 font-semibold ">Conclusion</h1>
          <p className="2xl:text-xl lg:text-lg">
            Uninhibited carnally hired played in whimpered dear gorilla koala
            depending and much yikes off far quetzal goodness and from for
            grimaced goodness unaccountably and meadowlark near unblushingly
            crucial scallop tightly neurotic hungrily some and dear furiously
            this apart.
          </p>

          <div className="my-3">
            <p className="text-xl font-semibold ">Tags</p>
            <div className="flex my-2 gap-2">
              <p className="px-4 border border-zinc-700 py-1  rounded-full">
                romance
              </p>
              <p className="px-4 border border-zinc-700 py-1  rounded-full">
                romance
              </p>
              <p className="px-4 border border-zinc-700 py-1  rounded-full">
                romance
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <h1 className="lg:text-xl font-semibold 2xl:text-2xl">
            Latest News{" "}
          </h1>

          <div>
            <SmallVerticalBLogCard />
            <SmallVerticalBLogCard />
            <SmallVerticalBLogCard />
          </div>
        </div>
      </div>

      <div className="grid gap-10 grid-cols-7">
        <div className="col-span-3">
          <HorizontalLine />
          <h1 className="text-xl font-semibold">12 Comments</h1>

          <CommentCard />
          <CommentCard />
          <CommentCard />
          <p className="text-center my-4">View All</p>

          <p className="text-2xl font-semibold">Leave a Reply</p>
          <div className="my-4 gap-2  flex items-center ">
            <Image src={avater} alt="" className="w-14 ronded-full" />
            <div className="w-full relative">
              <AiOutlineSend className="absolute cursor-pointer right-2 top-4 text-zinc-700" />
              <input
                type="text"
                className="w-full focus:outline-none rounded-lg bg-zinc-300 p-3 text-zinc-800"
                placeholder="Comment"
              />
            </div>
          </div>
        </div>
        <div className="col-span-4 grid grid-cols-3 gap-4">
          <SmallVerticalBLogCard />
          <SmallVerticalBLogCard />
          <SmallVerticalBLogCard />
          <SmallVerticalBLogCard />
          <SmallVerticalBLogCard />
          <SmallVerticalBLogCard />
        </div>
      </div>
    </section>
  );
};

export default DetailPage;
