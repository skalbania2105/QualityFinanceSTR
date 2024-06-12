import React from "react";

import { Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

import { Button, Img, Input, Line, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const MainDashboardPage = () => {
  const navigate = useNavigate();

  const [groupeightvalue, setGroupeightvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray-100 flex sm:flex-col md:flex-col flex-row font-inter sm:gap-5 md:gap-5 items-start mx-auto w-full">
        <Sidebar className="!sticky !w-[250px] flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]">
          <div className="bg-white-A700 flex flex-col gap-[50px] items-center justify-start py-[30px] w-full">
            <Img
              className="common-pointer h-30 md:h-30 object-cover w-[65%]"
              src="images/logo.png"
              alt="Logo"
              onClick={() => navigate(-1)}
            />
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex flex-row gap-[34px] items-center justify-start w-[72%] md:w-full">
                <Line className="bg-indigo-600 h-[60px] rounded-br-[10px] rounded-tr-[10px] w-1.5" />
                <div className="flex flex-row gap-5 items-center justify-start w-[78%]">
                  <Img
                    className="h-[25px] w-[25px]"
                    src="images/img_home.svg"
                    alt="home"
                  />
                  <Text
                    className="text-indigo-600 text-lg"
                    size="txtInterMedium18"
                  >
                    Dashboard
                  </Text>
                </div>
              </div>
              <div
                className="common-pointer flex flex-col items-start justify-start p-[17px] w-full"
                onClick={() => navigate("/cashflow")}
              >
                <div className="flex flex-row gap-5 items-center justify-start md:ml-[0] ml-[23px] w-[73%] md:w-full">
                  <Img
                    className="h-[25px] w-[25px]"
                    src="images/img_glyph.svg"
                    alt="Glyph"
                  />
                  <Text
                    className="text-bluegray-400 text-lg"
                    size="txtInterMedium18Bluegray400"
                  >
                    Transactions
                  </Text>
                </div>
              </div>

              <div
                className="common-pointer flex flex-col items-start justify-start p-[17px] w-full"
                onClick={() => navigate("/currencymarket")}
              >
                <div className="flex flex-row gap-5 items-center justify-start md:ml-[0] ml-[23px] w-[70%] md:w-full">
                  <Img
                    className="h-[25px] w-[25px]"
                    src="images/img_map.svg"
                    alt="map"
                  />
                  <Text
                    className="text-bluegray-400 text-lg"
                    size="txtInterMedium18Bluegray400"
                  >
                    Investments
                  </Text>
                </div>
              </div>
              <div
                className="common-pointer flex flex-col items-start justify-start p-[17px] w-full"
                onClick={() => navigate("/recenttransactions")}
              >
                <div className="flex flex-row gap-5 items-start justify-start md:ml-[0] ml-[23px] w-[45%] md:w-full">
                  <Img
                    className="h-[25px] w-[25px]"
                    src="images/img_question.svg"
                    alt="question"
                  />
                  <Text
                    className="text-bluegray-400 text-lg"
                    size="txtInterMedium18Bluegray400"
                  >
                    Loans
                  </Text>
                </div>
              </div>
              <div
                className="common-pointer flex flex-col items-start justify-start p-[17px] w-full"
                onClick={() => navigate("/settingeditprofile")}
              >
                <div className="flex flex-row gap-5 items-center justify-start md:ml-[0] ml-[23px] w-1/2 md:w-full">
                  <Img
                    className="h-[25px] w-[25px]"
                    src="images/img_settings.svg"
                    alt="settings"
                  />
                  <Text
                    className="text-bluegray-400 text-lg"
                    size="txtInterMedium18Bluegray400"
                  >
                    Setting
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </Sidebar>
        <div className="bg-colors flex flex-1 flex-col gap-[25px] items-center justify-start md:px-5 w-full">
          <div className="bg-colors1 border-b border-gray-300 border-solid flex md:flex-col flex-row md:gap-5 items-center justify-start p-5 w-full">
            <Text
              className="ml-5 md:ml-[0] sm:text-2xl md:text-[26px] text-[28px] text-gray-900"
              size="txtInterSemiBold28"
            >
              Overview
            </Text>
            <Link to="/settingeditprofile">
              <Button
                className="flex h-[50px] items-center justify-center md:ml-[0] ml-[30px] md:mt-0 my-[5px] w-[50px]"
                shape="circle"
                color="gray_102"
                size="sm"
                variant="fill"
              >
                <Img
                  className="h-[25px]"
                  src="images/img_settings_50X50.svg"
                  alt="settings One"
                />
              </Button>
            </Link>
            <Button
              className="flex h-[50px] items-center justify-center md:ml-[0] ml-[30px] md:mt-0 my-[5px] w-[50px]"
              shape="circle"
              color="gray_102"
              size="sm"
              variant="fill"
            >
              <Img
                className="h-[25px]"
                src="images/img_notification.svg"
                alt="notification"
              />
            </Button>
            <Img
              className="h-[60px] md:h-auto md:ml-[0] ml-[35px] rounded-[50%] w-[60px]"
              src="images/img_ellipse1.png"
              alt="EllipseOne"
            />
          </div>
          <div className="flex flex-col gap-6 items-center justify-start w-[94%] md:w-full">
            <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between w-full">
              <div className="flex md:flex-1 flex-col items-center justify-start w-[66%] md:w-full">
                <div className="flex flex-col gap-5 items-center justify-start w-full">
                  <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                    <Text
                      className="text-[22px] text-bluegray-900 sm:text-lg md:text-xl"
                      size="txtInterSemiBold22"
                    >
                      My Cards
                    </Text>

                  </div>
                  <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between w-full">
                    <div className="bg-green-800 text-green-300 flex md:flex-1 flex-col gap-[33px] items-center justify-end pt-6 rounded-[25px] w-[48%] md:w-full">
                      <div className="flex flex-col gap-[29px] items-start justify-start w-[87%] md:w-full">
                        <div className="flex flex-row items-start justify-between w-full">
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="text-white-A700 text-xs"
                              size="txtLatoRegular12"
                            >
                              Balance
                            </Text>
                            <Text
                              className="mt-1 text-white-A700 text-xl"
                              size="txtInterRegular20"
                            >
                              $5,756
                            </Text>
                          </div>
                          <Img
                            className="h-[34px] md:h-auto object-cover w-[34px]"
                            src="images/img_chipcard.png"
                            alt="ChipCard"
                          />
                        </div>
                        <div className="flex flex-row gap-[59px] items-center justify-start ml-0.5 md:ml-[0] w-[76%] md:w-full">
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="text-white-A700_b2 text-xs"
                              size="txtInterRegular12"
                            >
                              CARD HOLDER
                            </Text>
                            <Text
                              className="mt-1 text-[15px] text-white-A700"
                              size="txtInterRegular15"
                            >
                              Kamil
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="text-white-A700_b2 text-xs"
                              size="txtInterRegular12"
                            >
                              VALID THRU
                            </Text>
                            <Text
                              className="mt-1 text-[15px] text-white-A700"
                              size="txtInterRegular15"
                            >
                              12/22
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Input
                        name="Group319"
                        placeholder="3778 **** **** 1234"
                        className="leading-[normal] md:text-xl p-0 placeholder:text-white-A700 sm:text-lg text-[22px] text-left w-full"
                        wrapClassName="flex rounded-bl-[25px] rounded-br-[25px] w-full"
                        suffix={
                          <Img
                            className="ml-[35px] mr-6 my-5"
                            src="images/img_contrast.svg"
                            alt="contrast"
                          />
                        }
                        size="sm"
                        variant="gradient"
                        color="white_A700_26_white_A700_26"
                      ></Input>
                    </div>
                    <div className="bg-green-800 flex md:flex-1 flex-col gap-[33px] items-center justify-end pt-6 rounded-[25px] w-[48%] md:w-full">
                      <div className="flex flex-col gap-[29px] items-start justify-start w-[87%] md:w-full">
                        <div className="flex flex-row items-start justify-between w-full">
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="text-white-A700 text-xs"
                              size="txtLatoRegular12"
                            >
                              Balance
                            </Text>
                            <Text
                              className="mt-1 text-white-A700 text-xl"
                              size="txtInterRegular20"
                            >
                              $5,756
                            </Text>
                          </div>
                          <Img
                            className="h-[34px] md:h-auto object-cover w-[34px]"
                            src="images/img_chipcard.png"
                            alt="ChipCard One"
                          />
                        </div>
                        <div className="flex flex-row gap-[59px] items-center justify-start ml-0.5 md:ml-[0] w-[76%] md:w-full">
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="text-white-A700_b2 text-xs"
                              size="txtInterRegular12"
                            >
                              CARD HOLDER
                            </Text>
                            <Text
                              className="mt-1 text-[15px] text-white-A700"
                              size="txtInterRegular15"
                            >
                              Kamil
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="text-white-A700_b2 text-xs"
                              size="txtInterRegular12"
                            >
                              VALID THRU
                            </Text>
                            <Text
                              className="mt-1 text-[15px] text-white-A700"
                              size="txtInterRegular15"
                            >
                              12/22
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Input
                        name="Group319 One"
                        placeholder="3778 **** **** 1234"
                        className="leading-[normal] md:text-xl p-0 placeholder:text-white-A700 sm:text-lg text-[22px] text-left w-full"
                        wrapClassName="flex rounded-bl-[25px] rounded-br-[25px] w-full"
                        suffix={
                          <Img
                            className="ml-[35px] mr-6 my-5"
                            src="images/img_contrast.svg"
                            alt="contrast"
                          />
                        }
                        size="sm"
                        variant="gradient"
                        color="white_A700_26_white_A700_26"
                      ></Input>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col gap-5 items-start justify-start w-[32%] md:w-full">
                <Text
                  className="text-[22px] text-bluegray-900 sm:text-lg md:text-xl"
                  size="txtInterSemiBold22"
                >
                  Recent Transaction
                </Text>
                <List
                  className="bg-white-A700 flex flex-col gap-2.5 items-center p-6 sm:px-5 rounded-[25px] w-full"
                  orientation="vertical"
                >
                  <div className="flex flex-1 flex-row items-center justify-start w-full">
                    <Button
                      className="flex h-[55px] items-center justify-center rounded-[50%] w-[55px]"
                      color="gray_102"
                      size="sm"
                      variant="fill"
                    >
                      <Img
                        className="h-7"
                        src="images/img_videocamera.svg"
                        alt="videocamera"
                      />
                    </Button>
                    <div className="flex flex-col gap-[7px] items-start justify-start ml-[17px]">
                      <Text
                        className="text-base text-bluegray-600"
                        size="txtInterMedium16"
                      >
                        Deposit from my Card
                      </Text>
                      <Text
                        className="text-[15px] text-bluegray-400"
                        size="txtInterRegular15Bluegray400"
                      >
                        28 January 2021
                      </Text>
                    </div>
                    <Text
                      className="ml-[13px] text-base text-red-700"
                      size="txtInterMedium16Red700"
                    >
                      -$850
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-row items-center justify-start w-full">
                    <Button
                      className="flex h-[55px] items-center justify-center rounded-[50%] w-[55px]"
                      color="gray_102"
                      size="sm"
                      variant="fill"
                    >
                      <Img
                        className="h-7"
                        src="images/img_link.svg"
                        alt="link"
                      />
                    </Button>
                    <div className="flex flex-col gap-[7px] items-center justify-start ml-[17px]">
                      <Text
                        className="text-base text-bluegray-600"
                        size="txtInterMedium16"
                      >
                        Deposit Paypal
                      </Text>
                      <Text
                        className="text-[15px] text-bluegray-400"
                        size="txtInterRegular15Bluegray400"
                      >
                        25 January 2021
                      </Text>
                    </div>
                    <Text
                      className="ml-[46px] text-base text-green-600"
                      size="txtInterMedium16Green600"
                    >
                      +$2,500
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-row items-center justify-start w-full">
                    <Button
                      className="flex h-[55px] items-center justify-center rounded-[50%] w-[55px]"
                      color="gray_102"
                      size="sm"
                      variant="fill"
                    >
                      <Img
                        className="h-7"
                        src="images/img_clock.svg"
                        alt="clock"
                      />
                    </Button>
                    <div className="flex flex-col gap-[7px] items-start justify-start ml-[17px]">
                      <Text
                        className="text-base text-bluegray-600"
                        size="txtInterMedium16"
                      >
                        Jemi Wilson
                      </Text>
                      <Text
                        className="text-[15px] text-bluegray-400"
                        size="txtInterRegular15Bluegray400"
                      >
                        21 January 2021
                      </Text>
                    </div>
                    <Text
                      className="ml-12 text-base text-green-600"
                      size="txtInterMedium16Green600"
                    >
                      +$5,400
                    </Text>
                  </div>
                </List>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between w-full">
              <div className="flex md:flex-1 flex-col gap-[18px] items-start justify-start w-[66%] md:w-full">
                <Text
                  className="text-[22px] text-bluegray-900 sm:text-lg md:text-xl"
                  size="txtInterSemiBold22"
                >
                  Weekly Activity
                </Text>
                <div className="bg-white-A700 flex flex-col gap-[22px] items-end justify-start p-7 sm:px-5 rounded-[25px] w-full">
                  <div className="flex flex-row gap-[30px] items-center justify-end w-[30%] md:w-full">
                    <div className="flex flex-row gap-2.5 items-start justify-start w-[38%]">
                      <div className="bg-indigo-200 h-[15px] rounded-[50%] w-[15px]"></div>
                      <Text
                        className="text-[15px] text-bluegray-400"
                        size="txtInterRegular15Bluegray400"
                      >
                        Diposit
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2.5 items-start justify-start w-[47%]">
                      <div className="bg-indigo-600 h-[15px] rounded-[50%] w-[15px]"></div>
                      <Text
                        className="text-[15px] text-bluegray-400"
                        size="txtInterRegular15Bluegray400"
                      >
                        Withdraw
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start mr-0.5 w-[99%] md:w-full">
                    <div className="flex flex-col gap-[9px] justify-start w-full">
                      <div className="flex md:flex-col flex-row gap-2.5 items-center justify-between w-full">
                        <div className="flex flex-col gap-[21px] items-start justify-start">
                          <Text
                            className="text-[13px] text-bluegray-400"
                            size="txtInterRegular13"
                          >
                            500
                          </Text>
                          <Text
                            className="text-[13px] text-bluegray-400"
                            size="txtInterRegular13"
                          >
                            400
                          </Text>
                          <Text
                            className="text-[13px] text-bluegray-400"
                            size="txtInterRegular13"
                          >
                            300
                          </Text>
                          <Text
                            className="text-[13px] text-bluegray-400"
                            size="txtInterRegular13"
                          >
                            200
                          </Text>
                          <Text
                            className="text-[13px] text-bluegray-400"
                            size="txtInterRegular13"
                          >
                            100
                          </Text>
                          <Text
                            className="ml-3.5 md:ml-[0] text-[13px] text-bluegray-400"
                            size="txtInterRegular13"
                          >
                            0
                          </Text>
                        </div>
                        <Img
                          className="h-[186px]"
                          src="images/img_group899.svg"
                          alt="Group899"
                        />
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-end md:ml-[0] ml-[72px] w-[84%] md:w-full">
                        <Text
                          className="text-[13px] text-bluegray-400"
                          size="txtInterRegular13"
                        >
                          Sat
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[67px] text-[13px] text-bluegray-400"
                          size="txtInterRegular13"
                        >
                          Sun
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[65px] text-[13px] text-bluegray-400"
                          size="txtInterRegular13"
                        >
                          Mon
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[65px] text-[13px] text-bluegray-400"
                          size="txtInterRegular13"
                        >
                          Tue
                        </Text>
                        <Text
                          className="ml-16 sm:ml-[0] text-[13px] text-bluegray-400"
                          size="txtInterRegular13"
                        >
                          Wed
                        </Text>
                        <Text
                          className="ml-16 sm:ml-[0] text-[13px] text-bluegray-400"
                          size="txtInterRegular13"
                        >
                          Thu
                        </Text>
                        <Text
                          className="h-4 sm:ml-[0] ml-[70px] text-[13px] text-bluegray-400"
                          size="txtInterRegular13"
                        >
                          Fri
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col gap-[18px] items-start justify-start w-[32%] md:w-full">
                <Text
                  className="text-[22px] text-bluegray-900 sm:text-lg md:text-xl"
                  size="txtInterSemiBold22"
                >
                  Expense Statistics
                </Text>
                <div className="bg-white-A700 flex flex-col items-center justify-start p-[31px] sm:px-5 rounded-[25px] w-full">
                  <div className="md:h-[186px] h-[259px] relative w-[94%]">
                    <div
                      className="absolute bg-cover bg-no-repeat flex flex-col h-[129px] items-center justify-start left-[7%] p-[33px] sm:px-5 top-[0]"
                      style={{
                        backgroundImage: "url('images/img_group900.svg')",
                      }}
                    >
                      <Text
                        className="leading-[18.00px] mb-[22px] text-[13px] text-center text-white-A700"
                        size="txtInterMedium13"
                      >
                        <span className="text-white-A700 font-inter text-base font-bold">
                          <>
                            30%
                            <br />
                          </>
                        </span>
                        <span className="text-white-A700 font-inter font-bold">
                          Entertainment
                        </span>
                      </Text>
                    </div>
                    <div
                      className="absolute bg-cover bg-no-repeat bottom-[4%] flex flex-col h-[189px] items-center justify-start left-[0] p-3.5"
                      style={{
                        backgroundImage: "url('images/img_group903.svg')",
                      }}
                    >
                      <Text
                        className="leading-[18.00px] my-[59px] text-[13px] text-center text-white-A700"
                        size="txtInterMedium13"
                      >
                        <span className="text-white-A700 font-inter text-base font-bold">
                          <>
                            20%
                            <br />
                          </>
                        </span>
                        <span className="text-white-A700 font-inter font-bold">
                          Investment
                        </span>
                      </Text>
                    </div>
                    <div
                      className="absolute bg-cover bg-no-repeat flex flex-col h-[102px] items-end justify-end p-1.5 right-[0] top-[11%]"
                      style={{
                        backgroundImage: "url('images/img_group901.svg')",
                      }}
                    >
                      <Text
                        className="leading-[18.00px] mr-[19px] mt-12 text-[13px] text-center text-white-A700"
                        size="txtInterMedium13"
                      >
                        <span className="text-white-A700 font-inter text-base font-bold">
                          <>
                            15%
                            <br />
                          </>
                        </span>
                        <span className="text-white-A700 font-inter font-bold">
                          Bill Expense
                        </span>
                      </Text>
                    </div>
                    <div className="absolute bg-indigo-200 bottom-[0] flex flex-col h-[119px] items-center justify-start p-[23px] sm:px-5 right-[12%] w-[119px]">
                      <Text
                        className="leading-[18.00px] mb-[33px] text-[13px] text-center text-white-A700"
                        size="txtInterMedium13"
                      >
                        <span className="text-white-A700 font-inter text-base font-bold">
                          <>
                            35%
                            <br />
                          </>
                        </span>
                        <span className="text-white-A700 font-inter font-bold">
                          Others
                        </span>
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainDashboardPage;
