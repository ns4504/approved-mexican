import React from "react";

import { Button, Img, Text } from "components";

const MAINMENUPage = () => {
  return (
    <>
      <div className="bg-white-A700 h-[3800px] mx-auto relative w-full">
        <div className="font-kablammo h-[3800px] sm:h-[4076px] md:h-[5627px] m-auto md:px-5 w-full">
          <div
            className="bg-cover bg-no-repeat flex flex-col h-full items-center justify-start m-auto w-full"
            style={{ backgroundImage: "url('images/img_group30.png')" }}
          >
            <div className="bg-gray-600 flex sm:flex-col flex-row sm:gap-5 items-start justify-center p-[23px] sm:px-5 w-full">
              <Text
                className="sm:ml-[0] ml-[540px] sm:mt-0 mt-5 sm:text-[21px] md:text-[23px] text-[25px] text-blue_gray-50"
                size="txtKablammoRegularBloop25"
              >
                MENU
              </Text>
              <Text
                className="sm:ml-[0] ml-[31px] sm:mt-0 mt-5 sm:text-[21px] md:text-[23px] text-[25px] text-blue_gray-50"
                size="txtKablammoRegularBloop25"
              >
                ORDER
              </Text>
              <Text
                className="sm:ml-[0] ml-[30px] mr-[541px] sm:mt-0 mt-5 sm:text-[21px] md:text-[23px] text-[25px] text-blue_gray-50"
                size="txtKablammoRegularBloop25"
              >
                CATERING
              </Text>
            </div>
            <div className="h-[3700px] sm:h-[3891px] md:h-[5527px] relative w-full">
              <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                <div className="flex flex-col justify-start w-full">
                  <div className="h-[924px] relative w-full">
                    <Img
                      className="h-[924px] m-auto object-cover w-full"
                      src="images/img_burrito1.png"
                      alt="burritoOne"
                    />
                    <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[33%] w-[15%]">
                      <Text
                        className="sm:text-4xl md:text-[38px] text-[40px] text-center text-gray-800"
                        size="txtKablammoRegularBloop40"
                      >
                        <>
                          Authentic <br />
                          Mexican <br />
                          cuisine
                        </>
                      </Text>
                      <Button className="bg-white-A700_7f border-[5px] border-black-900 border-solid cursor-pointer font-galdeano leading-[normal] min-w-[200px] py-5 md:text-3xl sm:text-[28px] text-[32px] text-center text-gray-800">
                        ORDER NOW
                      </Button>
                    </div>
                  </div>
                  <div className="bg-gray-800 flex sm:flex-col flex-row font-galdeano sm:gap-5 items-center justify-start p-[25px] sm:px-5 w-full">
                    <Text
                      className="sm:ml-[0] ml-[76px] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-50"
                      size="txtGaldeanoRegular32"
                    >
                      Sign up for our mailing list for news and offers!
                    </Text>
                    <Button className="bg-gray-400 border-[5px] border-gray-600 border-solid cursor-pointer leading-[normal] min-w-[150px] sm:ml-[0] ml-[63px] py-[9px] text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center">
                      Zip Code
                    </Button>
                    <Button className="bg-gray-400 border-[5px] border-gray-600 border-solid cursor-pointer leading-[normal] min-w-[250px] sm:ml-[0] ml-[22px] py-[9px] text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center">
                      E-Mail Address
                    </Button>
                    <Button className="border-[5px] border-blue_gray-50 border-solid cursor-pointer leading-[normal] min-w-[100px] sm:ml-[0] ml-[33px] py-[9px] text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700">
                      Submit
                    </Button>
                  </div>
                  <div className="font-kablammo h-[377px] md:h-[472px] mt-[95px] relative w-full">
                    <Img
                      className="h-[377px] m-auto object-cover w-full"
                      src="images/img_chickentacos1.png"
                      alt="chickentacosOne"
                    />
                    <Text
                      className="absolute left-[19%] sm:text-4xl md:text-[38px] text-[40px] text-center text-gray-800 top-[36%]"
                      size="txtKablammoRegularBloop40"
                    >
                      Try our daily specials!
                    </Text>
                  </div>
                  <Text
                    className="md:ml-[0] ml-[617px] mt-[68px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                    size="txtKablammoRegularBloop25Black900"
                  >
                    MENU HIGHLIGHTS
                  </Text>
                  <div className="flex md:flex-col flex-row gap-12 items-center justify-center md:ml-[0] ml-[253px] mt-[35px] w-[66%] md:w-full">
                    <Img
                      className="h-[300px] sm:h-auto object-cover w-[32%] md:w-full"
                      src="images/img_chips1.png"
                      alt="chipsOne"
                    />
                    <Img
                      className="h-[300px] sm:h-auto object-cover w-[64%] md:w-full"
                      src="images/img_tacoscarneasada.png"
                      alt="tacoscarneasada"
                    />
                  </div>
                  <div className="flex md:flex-col flex-row gap-[46px] items-center justify-center md:ml-[0] ml-[253px] mt-[70px] w-[66%] md:w-full">
                    <Img
                      className="h-[297px] sm:h-auto object-cover w-[48%] md:w-full"
                      src="images/img_enchiladas1.png"
                      alt="enchiladasOne"
                    />
                    <Img
                      className="h-[297px] sm:h-auto object-cover w-[48%] md:w-full"
                      src="images/img_burrito1.png"
                      alt="burritoOne_One"
                    />
                  </div>
                  <div className="flex md:flex-col flex-row gap-[49px] items-center justify-center md:ml-[0] ml-[253px] mt-[67px] w-[66%] md:w-full">
                    <Img
                      className="h-[300px] sm:h-auto object-cover w-[64%] md:w-full"
                      src="images/img_ricebeans1.png"
                      alt="ricebeansOne"
                    />
                    <Img
                      className="h-[299px] sm:h-auto object-cover w-[32%] md:w-full"
                      src="images/img_churros1.png"
                      alt="churrosOne"
                    />
                  </div>
                  <div className="flex md:flex-col flex-row gap-[46px] items-center justify-center md:ml-[0] ml-[253px] mt-[67px] w-[64%] md:w-full">
                    <Img
                      className="h-[300px] sm:h-auto object-cover w-1/2 md:w-full"
                      src="images/img_sodas1.png"
                      alt="sodasOne"
                    />
                    <Img
                      className="h-[299px] sm:h-auto object-cover w-[46%] md:w-full"
                      src="images/img_tamales1.png"
                      alt="tamalesOne"
                    />
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start md:ml-[0] ml-[212px] mt-[39px] w-[51%] md:w-full">
                    <Img
                      className="h-[200px] md:h-auto mb-1.5 object-cover w-[200px]"
                      src="images/img_images1.png"
                      alt="imagesOne"
                    />
                    <Img
                      className="h-[200px] md:h-auto mb-1.5 ml-16 md:ml-[0] object-cover w-[200px]"
                      src="images/img_catering1.png"
                      alt="cateringOne"
                    />
                    <Img
                      className="h-[200px] md:h-auto md:ml-[0] ml-[61px] md:mt-0 mt-1.5 object-cover w-[200px]"
                      src="images/img_mail1.png"
                      alt="mailOne"
                    />
                  </div>
                  <div className="bg-blue_gray-50 flex flex-col gap-9 items-center justify-start mt-[52px] p-[23px] sm:px-5 w-full">
                    <Text
                      className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-600"
                      size="txtKablammoRegularBloop25Gray600"
                    >
                      ABOUT US
                    </Text>
                    <Text
                      className="mb-[200px] sm:text-[21px] md:text-[23px] text-[25px] text-center text-gray-600"
                      size="txtGaldeanoRegular25"
                    >
                      <>
                        We here at Approved Mexican Diner want all of our
                        customers to experience the most authentic
                        <br />
                        Mexican experience that we could possibly provide!
                      </>
                    </Text>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[12%] flex flex-col font-galdeano md:gap-10 gap-[1786px] justify-start right-[17%] w-[26%]">
                <Button className="bg-white-A700_7f border-[5px] border-black-900 border-solid cursor-pointer leading-[normal] min-w-[200px] mr-[173px] py-5 md:text-3xl sm:text-[28px] text-[32px] text-center text-gray-800">
                  ORDER NOW
                </Button>
                <Img
                  className="h-[152px] md:h-auto md:ml-[0] ml-[173px] object-cover w-[54%] sm:w-full"
                  src="images/img_giftcard1.png"
                  alt="giftcardOne"
                />
              </div>
            </div>
          </div>
          <Img
            className="absolute h-[95px] left-[5%] object-cover top-[0] w-[7%]"
            src="images/img_image1.png"
            alt="imageOne"
          />
        </div>
        <Text
          className="absolute left-[0] text-white-A700 text-xl top-[2%]"
          size="txtGaldeanoRegular20"
        >
          APPROVED MEXICAN DINER
        </Text>
      </div>
    </>
  );
};

export default MAINMENUPage;
