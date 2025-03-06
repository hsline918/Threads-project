import {
  ChevronDown,
  Eye,
  MessageCircle,
  Heart,
  Repeat2,
  MessageSquareQuote,
  Share2,
} from "lucide-react";

export default function Threads() {
  return (
    <div className="w-[1132px] h-[709px] p-4 bg-white rounded-[10px] border border-gray-200 flex-col justify-start items-start gap-6 inline-flex">
      <div className="self-stretch justify-start items-center gap-2 inline-flex">
        <div className="px-6 py-2 bg-white rounded-[10px] border border-gray-200 justify-center items-center gap-1 flex">
          <div>
            <span className="text-gray-950 text-sm font-medium font-['Poppins']">
              7
            </span>
            <span className="text-gray-950 text-sm font-medium font-['Noto Sans CJK TC']">
              {" "}
              天
            </span>
          </div>
          <ChevronDown size={20} color="#030712" />
        </div>
      </div>
      <div className="self-stretch h-[136px] pb-3 border-b border-gray-200 flex-col justify-start items-start gap-2 flex">
        <div className="self-stretch justify-start items-center gap-4 inline-flex">
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
            <div className="self-stretch justify-start items-start gap-2 inline-flex">
              <div className="h-[26px] justify-start items-center gap-1 flex">
                <div className="text-gray-950 text-base font-medium font-['Noto Sans CJK TC']">
                  James Fok
                </div>
                <div className="text-[#99a1af] text-base font-normal font-['Noto Sans CJK TC']">
                  3 小時
                </div>
                <div className="px-2 py-1 bg-gray-200 rounded justify-start items-center gap-1 flex">
                  <div className="text-gray-950 text-xs font-normal font-['Poppins']">
                    心情
                  </div>
                </div>
              </div>
              <div className="grow shrink basis-0 h-6 justify-start items-center gap-2 flex">
                <div className="w-28 text-[#4a5565] text-base font-normal font-['Noto Sans CJK TC']">
                  瀏覽
                </div>
                <div className="w-24 text-[#4a5565] text-base font-normal font-['Noto Sans CJK TC']">
                  愛心
                </div>
                <div className="w-24 text-[#4a5565] text-base font-normal font-['Noto Sans CJK TC']">
                  留言
                </div>
                <div className="w-24 text-[#4a5565] text-base font-normal font-['Noto Sans CJK TC']">
                  轉發
                </div>
                <div className="w-24 text-[#4a5565] text-base font-normal font-['Noto Sans CJK TC']">
                  引用
                </div>
                <div className="w-24 text-[#4a5565] text-base font-normal font-['Noto Sans CJK TC']">
                  分享
                </div>
              </div>
            </div>
            {/* 這裡版型要修改一下 */}

            <div className="self-stretch justify-start items-start gap-2 inline-flex">
              <div className="grow shrink basis-0 text-[#364153] text-sm font-normal font-['Noto Sans CJK TC'] leading-[21px]">
                Threads 儀表板開發日記Day7 -
                敏感資訊放在.env管理並使用.gitignore
                <br />
                今天整理了一下程式碼發現之前用的一些access token
              </div>
              <div className="justify-start items-start gap-2 flex">
                <div className="w-28 flex-col justify-start items-start gap-2 inline-flex">
                  <div className="justify-start items-center gap-1 inline-flex">
                    <Eye size={20} color="#4A5565" />
                    <div className="text-gray-950 text-base font-semibold font-['Poppins SemiBold'] leading-loose">
                      400,123
                    </div>
                  </div>
                </div>
                <div className="w-24 flex-col justify-start items-start gap-2 inline-flex">
                  <div className="justify-start items-center gap-1 inline-flex">
                    <Heart size={20} color="#4A5565" />
                    <div className="text-gray-950 text-base font-semibold font-['Poppins SemiBold'] leading-loose">
                      96
                    </div>
                  </div>
                </div>
                <div className="w-24 flex-col justify-start items-start gap-2 inline-flex">
                  <div className="justify-start items-center gap-1 inline-flex">
                    <MessageCircle size={20} color="#4A5565" />
                    <div className="text-gray-950 text-base font-semibold font-['Poppins SemiBold'] leading-loose">
                      882
                    </div>
                  </div>
                </div>
                <div className="w-24 flex-col justify-start items-start gap-2 inline-flex">
                  <div className="justify-start items-center gap-1 inline-flex">
                    <Repeat2 size={20} color="#4A5565" />
                    <div className="text-gray-950 text-base font-semibold font-['Poppins SemiBold'] leading-loose">
                      96
                    </div>
                  </div>
                </div>
                <div className="w-24 flex-col justify-start items-start gap-2 inline-flex">
                  <div className="justify-start items-center gap-1 inline-flex">
                    <MessageSquareQuote size={20} color="#4A5565" />
                    <div className="text-gray-950 text-base font-semibold font-['Poppins SemiBold'] leading-loose">
                      96
                    </div>
                  </div>
                </div>
                <div className="w-24 flex-col justify-start items-start gap-2 inline-flex">
                  <div className="justify-start items-center gap-1 inline-flex">
                    <Share2 size={20} color="#4A5565" />
                    <div className="text-gray-950 text-base font-semibold font-['Poppins SemiBold'] leading-loose">
                      96
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-10 px-6 py-2 bg-white rounded-[32px] border border-gray-200 justify-center items-center gap-1 inline-flex">
          <div className="text-gray-950 text-sm font-medium font-['Noto Sans CJK TC']">
            分析串文
          </div>
        </div>
      </div>
      {/* <div className="self-stretch h-[136px] pb-3 border-b border-gray-200 flex-col justify-start items-start gap-2 flex">
        <div className="self-stretch justify-start items-center gap-4 inline-flex">
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
            <div className="self-stretch justify-start items-start gap-2 inline-flex">
              <div className="h-[26px] justify-start items-center gap-1 flex">
                <div className="text-gray-950 text-base font-medium font-['Noto Sans CJK TC']">
                  James Fok
                </div>
                <div className="text-[#99a1af] text-base font-normal font-['Noto Sans CJK TC']">
                  3 小時
                </div>
                <div className="px-2 py-1 bg-gray-200 rounded justify-start items-center gap-1 flex">
                  <div className="text-gray-950 text-xs font-normal font-['Poppins']">
                    心情
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch justify-start items-start gap-2 inline-flex">
              <div className="grow shrink basis-0 text-[#364153] text-sm font-normal font-['Noto Sans CJK TC'] leading-[21px]">
                Threads 儀表板開發日記Day7 -
                敏感資訊放在.env管理並使用.gitignore
                <br />
                今天整理了一下程式碼發現之前用的一些access token
              </div>
              <div className="justify-start items-start gap-2 flex">
                <div className="w-28 flex-col justify-start items-start gap-2 inline-flex">
                  <div className="justify-start items-center gap-1 inline-flex">
                    <div data-svg-wrapper className="relative">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M9.99961 5.00053C8.39051 5.00053 6.81765 5.47831 5.48042 6.3733C4.15151 7.26273 3.11478 8.52438 2.49982 10C3.11478 11.4756 4.15151 12.7373 5.48042 13.6267C6.81765 14.5217 8.39051 14.9995 9.99961 14.9995C11.6087 14.9995 13.1816 14.5217 14.5188 13.6267C15.8477 12.7373 16.8844 11.4756 17.4994 10C16.8844 8.52438 15.8477 7.26273 14.5188 6.3733C13.1816 5.47831 11.6087 5.00053 9.99961 5.00053ZM4.55341 4.98823C6.16494 3.90965 8.06044 3.33386 9.99961 3.33386C11.9388 3.33386 13.8343 3.90965 15.4458 4.98823C17.0573 6.06681 18.3123 7.5996 19.0517 9.39229C19.0554 9.40147 19.0591 9.41071 19.0625 9.42002C19.2014 9.79421 19.2014 10.2058 19.0625 10.58C19.0591 10.5893 19.0554 10.5986 19.0517 10.6077C18.3123 12.4004 17.0573 13.9332 15.4458 15.0118C13.8343 16.0904 11.9388 16.6662 9.99961 16.6662C8.06044 16.6662 6.16494 16.0904 4.55341 15.0118C2.94188 13.9332 1.68689 12.4004 0.947553 10.6077C0.943769 10.5986 0.940149 10.5893 0.936695 10.58C0.797794 10.2058 0.797794 9.79421 0.936695 9.42002C0.940149 9.41071 0.943769 9.40147 0.947553 9.39229C1.68689 7.5996 2.94188 6.06681 4.55341 4.98823ZM9.99961 8.33335C9.07913 8.33335 8.33294 9.07954 8.33294 10C8.33294 10.9205 9.07913 11.6667 9.99961 11.6667C10.9201 11.6667 11.6663 10.9205 11.6663 10C11.6663 9.07954 10.9201 8.33335 9.99961 8.33335ZM6.66627 10C6.66627 8.15907 8.15866 6.66668 9.99961 6.66668C11.8406 6.66668 13.3329 8.15907 13.3329 10C13.3329 11.841 11.8406 13.3333 9.99961 13.3333C8.15866 13.3333 6.66627 11.841 6.66627 10Z"
                          fill="#030712"
                        />
                      </svg>
                    </div>
                    <div className="text-gray-950 text-base font-semibold font-['Poppins SemiBold'] leading-loose">
                      400,123
                    </div>
                  </div>
                </div>
                <div className="w-24 flex-col justify-start items-start gap-2 inline-flex">
                  <div className="justify-start items-center gap-1 inline-flex">
                    <div data-svg-wrapper className="relative">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.8334 11.6667C17.075 10.45 18.3334 8.99167 18.3334 7.08333C18.3334 5.86776 17.8505 4.70197 16.9909 3.84243C16.1314 2.98289 14.9656 2.5 13.75 2.5C12.2834 2.5 11.25 2.91667 10 4.16667C8.75002 2.91667 7.71669 2.5 6.25002 2.5C5.03444 2.5 3.86866 2.98289 3.00911 3.84243C2.14957 4.70197 1.66669 5.86776 1.66669 7.08333C1.66669 9 2.91669 10.4583 4.16669 11.6667L10 17.5L15.8334 11.6667Z"
                          stroke="#4A5565"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="text-gray-950 text-base font-semibold font-['Poppins SemiBold'] leading-loose">
                      96
                    </div>
                  </div>
                </div>
                <div className="w-24 flex-col justify-start items-start gap-2 inline-flex">
                  <div className="justify-start items-center gap-1 inline-flex">
                    <div data-svg-wrapper className="relative">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.58335 16.6667C8.17383 17.4825 10.0034 17.7035 11.7424 17.2898C13.4814 16.8761 15.0155 15.8548 16.0681 14.4101C17.1208 12.9654 17.6229 11.1922 17.4838 9.41012C17.3448 7.628 16.5738 5.95413 15.3099 4.69015C14.0459 3.42617 12.372 2.6552 10.5899 2.51617C8.80776 2.37714 7.03458 2.87919 5.58987 3.93186C4.14516 4.98453 3.12393 6.51858 2.71021 8.25758C2.29648 9.99658 2.51747 11.8262 3.33335 13.4167L1.66669 18.3333L6.58335 16.6667Z"
                          stroke="#4A5565"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="text-gray-950 text-base font-semibold font-['Poppins SemiBold'] leading-loose">
                      882
                    </div>
                  </div>
                </div>
                <div className="w-24 flex-col justify-start items-start gap-2 inline-flex">
                  <div className="justify-start items-center gap-1 inline-flex">
                    <div data-svg-wrapper className="relative">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.5 18.3333L5 15.8333M5 15.8333L7.5 13.3333M5 15.8333H13.3333C13.7754 15.8333 14.1993 15.6577 14.5118 15.3452C14.8244 15.0326 15 14.6087 15 14.1666V9.16665M12.5 1.66665L15 4.16665M15 4.16665L12.5 6.66665M15 4.16665H6.66667C6.22464 4.16665 5.80072 4.34224 5.48816 4.6548C5.17559 4.96736 5 5.39128 5 5.83331V10.8333"
                          stroke="#4A5565"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="text-gray-950 text-base font-semibold font-['Poppins SemiBold'] leading-loose">
                      96
                    </div>
                  </div>
                </div>
                <div className="w-24 flex-col justify-start items-start gap-2 inline-flex">
                  <div className="justify-start items-center gap-1 inline-flex">
                    <div data-svg-wrapper className="relative">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.66667 10C7.10869 10 7.53262 9.8244 7.84518 9.51184C8.15774 9.19928 8.33333 8.77536 8.33333 8.33333V6.66667H6.66667M11.6667 10C12.1087 10 12.5326 9.8244 12.8452 9.51184C13.1577 9.19928 13.3333 8.77536 13.3333 8.33333V6.66667H11.6667M17.5 12.5C17.5 12.942 17.3244 13.366 17.0118 13.6785C16.6993 13.9911 16.2754 14.1667 15.8333 14.1667H5.83333L2.5 17.5V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H15.8333C16.2754 2.5 16.6993 2.67559 17.0118 2.98816C17.3244 3.30072 17.5 3.72464 17.5 4.16667V12.5Z"
                          stroke="#4A5565"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="text-gray-950 text-base font-semibold font-['Poppins SemiBold'] leading-loose">
                      96
                    </div>
                  </div>
                </div>
                <div className="w-24 flex-col justify-start items-start gap-2 inline-flex">
                  <div className="justify-start items-center gap-1 inline-flex">
                    <div data-svg-wrapper className="relative">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.15833 11.2583L12.85 14.575M12.8417 5.42499L7.15833 8.74166M17.5 4.16666C17.5 5.54737 16.3807 6.66666 15 6.66666C13.6193 6.66666 12.5 5.54737 12.5 4.16666C12.5 2.78594 13.6193 1.66666 15 1.66666C16.3807 1.66666 17.5 2.78594 17.5 4.16666ZM7.5 9.99999C7.5 11.3807 6.38071 12.5 5 12.5C3.61929 12.5 2.5 11.3807 2.5 9.99999C2.5 8.61928 3.61929 7.49999 5 7.49999C6.38071 7.49999 7.5 8.61928 7.5 9.99999ZM17.5 15.8333C17.5 17.214 16.3807 18.3333 15 18.3333C13.6193 18.3333 12.5 17.214 12.5 15.8333C12.5 14.4526 13.6193 13.3333 15 13.3333C16.3807 13.3333 17.5 14.4526 17.5 15.8333Z"
                          stroke="#4A5565"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="text-gray-950 text-base font-semibold font-['Poppins SemiBold'] leading-loose">
                      96
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-10 px-6 py-2 bg-white rounded-[32px] border border-gray-200 justify-center items-center gap-1 inline-flex">
          <div className="text-gray-950 text-sm font-medium font-['Noto Sans CJK TC']">
            分析串文
          </div>
        </div>
      </div>
      <div className="self-stretch h-[136px] pb-3 border-b border-gray-200 flex-col justify-start items-start gap-2 flex">
        <div className="self-stretch justify-start items-center gap-4 inline-flex">
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
            <div className="self-stretch justify-start items-start gap-2 inline-flex">
              <div className="h-[26px] justify-start items-center gap-1 flex">
                <div className="text-gray-950 text-base font-medium font-['Noto Sans CJK TC']">
                  James Fok
                </div>
                <div className="text-[#99a1af] text-base font-normal font-['Noto Sans CJK TC']">
                  3 小時
                </div>
                <div className="px-2 py-1 bg-gray-200 rounded justify-start items-center gap-1 flex">
                  <div className="text-gray-950 text-xs font-normal font-['Poppins']">
                    心情
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch justify-start items-start gap-2 inline-flex">
              <div className="grow shrink basis-0 text-[#364153] text-sm font-normal font-['Noto Sans CJK TC'] leading-[21px]">
                Threads 儀表板開發日記Day7 -
                敏感資訊放在.env管理並使用.gitignore
                <br />
                今天整理了一下程式碼發現之前用的一些access token
              </div>
              <div className="justify-start items-start gap-2 flex">
                <div className="w-28 flex-col justify-start items-start gap-2 inline-flex">
                  <div className="justify-start items-center gap-1 inline-flex">
                    <div data-svg-wrapper className="relative">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M9.99961 5.00053C8.39051 5.00053 6.81765 5.47831 5.48042 6.3733C4.15151 7.26273 3.11478 8.52438 2.49982 10C3.11478 11.4756 4.15151 12.7373 5.48042 13.6267C6.81765 14.5217 8.39051 14.9995 9.99961 14.9995C11.6087 14.9995 13.1816 14.5217 14.5188 13.6267C15.8477 12.7373 16.8844 11.4756 17.4994 10C16.8844 8.52438 15.8477 7.26273 14.5188 6.3733C13.1816 5.47831 11.6087 5.00053 9.99961 5.00053ZM4.55341 4.98823C6.16494 3.90965 8.06044 3.33386 9.99961 3.33386C11.9388 3.33386 13.8343 3.90965 15.4458 4.98823C17.0573 6.06681 18.3123 7.5996 19.0517 9.39229C19.0554 9.40147 19.0591 9.41071 19.0625 9.42002C19.2014 9.79421 19.2014 10.2058 19.0625 10.58C19.0591 10.5893 19.0554 10.5986 19.0517 10.6077C18.3123 12.4004 17.0573 13.9332 15.4458 15.0118C13.8343 16.0904 11.9388 16.6662 9.99961 16.6662C8.06044 16.6662 6.16494 16.0904 4.55341 15.0118C2.94188 13.9332 1.68689 12.4004 0.947553 10.6077C0.943769 10.5986 0.940149 10.5893 0.936695 10.58C0.797794 10.2058 0.797794 9.79421 0.936695 9.42002C0.940149 9.41071 0.943769 9.40147 0.947553 9.39229C1.68689 7.5996 2.94188 6.06681 4.55341 4.98823ZM9.99961 8.33335C9.07913 8.33335 8.33294 9.07954 8.33294 10C8.33294 10.9205 9.07913 11.6667 9.99961 11.6667C10.9201 11.6667 11.6663 10.9205 11.6663 10C11.6663 9.07954 10.9201 8.33335 9.99961 8.33335ZM6.66627 10C6.66627 8.15907 8.15866 6.66668 9.99961 6.66668C11.8406 6.66668 13.3329 8.15907 13.3329 10C13.3329 11.841 11.8406 13.3333 9.99961 13.3333C8.15866 13.3333 6.66627 11.841 6.66627 10Z"
                          fill="#030712"
                        />
                      </svg>
                    </div>
                    <div className="text-gray-950 text-base font-semibold font-['Poppins SemiBold'] leading-loose">
                      400,123
                    </div>
                  </div>
                </div>
                <div className="w-24 flex-col justify-start items-start gap-2 inline-flex">
                  <div className="justify-start items-center gap-1 inline-flex">
                    <div data-svg-wrapper className="relative">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.8334 11.6667C17.075 10.45 18.3334 8.99167 18.3334 7.08333C18.3334 5.86776 17.8505 4.70197 16.9909 3.84243C16.1314 2.98289 14.9656 2.5 13.75 2.5C12.2834 2.5 11.25 2.91667 10 4.16667C8.75002 2.91667 7.71669 2.5 6.25002 2.5C5.03444 2.5 3.86866 2.98289 3.00911 3.84243C2.14957 4.70197 1.66669 5.86776 1.66669 7.08333C1.66669 9 2.91669 10.4583 4.16669 11.6667L10 17.5L15.8334 11.6667Z"
                          stroke="#4A5565"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="text-gray-950 text-base font-semibold font-['Poppins SemiBold'] leading-loose">
                      96
                    </div>
                  </div>
                </div>
                <div className="w-24 flex-col justify-start items-start gap-2 inline-flex">
                  <div className="justify-start items-center gap-1 inline-flex">
                    <div data-svg-wrapper className="relative">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.58335 16.6667C8.17383 17.4826 10.0034 17.7036 11.7424 17.2898C13.4814 16.8761 15.0155 15.8549 16.0681 14.4102C17.1208 12.9655 17.6229 11.1923 17.4838 9.41015C17.3448 7.62803 16.5738 5.95416 15.3099 4.69018C14.0459 3.4262 12.372 2.65523 10.5899 2.5162C8.80776 2.37717 7.03458 2.87922 5.58987 3.93189C4.14516 4.98456 3.12393 6.51861 2.71021 8.25761C2.29648 9.99661 2.51747 11.8262 3.33335 13.4167L1.66669 18.3333L6.58335 16.6667Z"
                          stroke="#4A5565"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="text-gray-950 text-base font-semibold font-['Poppins SemiBold'] leading-loose">
                      882
                    </div>
                  </div>
                </div>
                <div className="w-24 flex-col justify-start items-start gap-2 inline-flex">
                  <div className="justify-start items-center gap-1 inline-flex">
                    <div data-svg-wrapper className="relative">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.5 18.3333L5 15.8333M5 15.8333L7.5 13.3333M5 15.8333H13.3333C13.7754 15.8333 14.1993 15.6577 14.5118 15.3452C14.8244 15.0326 15 14.6087 15 14.1666V9.16665M12.5 1.66665L15 4.16665M15 4.16665L12.5 6.66665M15 4.16665H6.66667C6.22464 4.16665 5.80072 4.34224 5.48816 4.6548C5.17559 4.96736 5 5.39128 5 5.83331V10.8333"
                          stroke="#4A5565"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="text-gray-950 text-base font-semibold font-['Poppins SemiBold'] leading-loose">
                      96
                    </div>
                  </div>
                </div>
                <div className="w-24 flex-col justify-start items-start gap-2 inline-flex">
                  <div className="justify-start items-center gap-1 inline-flex">
                    <div data-svg-wrapper className="relative">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.66667 10C7.10869 10 7.53262 9.8244 7.84518 9.51184C8.15774 9.19928 8.33333 8.77536 8.33333 8.33333V6.66667H6.66667M11.6667 10C12.1087 10 12.5326 9.8244 12.8452 9.51184C13.1577 9.19928 13.3333 8.77536 13.3333 8.33333V6.66667H11.6667M17.5 12.5C17.5 12.942 17.3244 13.366 17.0118 13.6785C16.6993 13.9911 16.2754 14.1667 15.8333 14.1667H5.83333L2.5 17.5V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H15.8333C16.2754 2.5 16.6993 2.67559 17.0118 2.98816C17.3244 3.30072 17.5 3.72464 17.5 4.16667V12.5Z"
                          stroke="#4A5565"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="text-gray-950 text-base font-semibold font-['Poppins SemiBold'] leading-loose">
                      96
                    </div>
                  </div>
                </div>
                <div className="w-24 flex-col justify-start items-start gap-2 inline-flex">
                  <div className="justify-start items-center gap-1 inline-flex">
                    <div data-svg-wrapper className="relative">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.15833 11.2584L12.85 14.575M12.8417 5.42502L7.15833 8.74169M17.5 4.16669C17.5 5.5474 16.3807 6.66669 15 6.66669C13.6193 6.66669 12.5 5.5474 12.5 4.16669C12.5 2.78598 13.6193 1.66669 15 1.66669C16.3807 1.66669 17.5 2.78598 17.5 4.16669ZM7.5 10C7.5 11.3807 6.38071 12.5 5 12.5C3.61929 12.5 2.5 11.3807 2.5 10C2.5 8.61931 3.61929 7.50002 5 7.50002C6.38071 7.50002 7.5 8.61931 7.5 10ZM17.5 15.8334C17.5 17.2141 16.3807 18.3334 15 18.3334C13.6193 18.3334 12.5 17.2141 12.5 15.8334C12.5 14.4526 13.6193 13.3334 15 13.3334C16.3807 13.3334 17.5 14.4526 17.5 15.8334Z"
                          stroke="#4A5565"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="text-gray-950 text-base font-semibold font-['Poppins SemiBold'] leading-loose">
                      96
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-10 px-6 py-2 bg-white rounded-[32px] border border-gray-200 justify-center items-center gap-1 inline-flex">
          <div className="text-gray-950 text-sm font-medium font-['Noto Sans CJK TC']">
            分析串文
          </div>
        </div>
      </div>
      <div className="self-stretch h-[136px] pb-3 border-b border-gray-200 flex-col justify-start items-start gap-2 flex">
        <div className="self-stretch justify-start items-center gap-4 inline-flex">
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
            <div className="self-stretch justify-start items-start gap-2 inline-flex">
              <div className="h-[26px] justify-start items-center gap-1 flex">
                <div className="text-gray-950 text-base font-medium font-['Noto Sans CJK TC']">
                  James Fok
                </div>
                <div className="text-[#99a1af] text-base font-normal font-['Noto Sans CJK TC']">
                  3 小時
                </div>
                <div className="px-2 py-1 bg-gray-200 rounded justify-start items-center gap-1 flex">
                  <div className="text-gray-950 text-xs font-normal font-['Poppins']">
                    心情
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch justify-start items-start gap-2 inline-flex">
              <div className="grow shrink basis-0 text-[#364153] text-sm font-normal font-['Noto Sans CJK TC'] leading-[21px]">
                Threads 儀表板開發日記Day7 -
                敏感資訊放在.env管理並使用.gitignore
                <br />
                今天整理了一下程式碼發現之前用的一些access token
              </div>
              <div className="justify-start items-start gap-2 flex">
                <div className="w-28 flex-col justify-start items-start gap-2 inline-flex">
                  <div className="justify-start items-center gap-1 inline-flex">
                    <div data-svg-wrapper className="relative">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M9.99961 5.00053C8.39051 5.00053 6.81765 5.47831 5.48042 6.3733C4.15151 7.26273 3.11478 8.52438 2.49982 10C3.11478 11.4756 4.15151 12.7373 5.48042 13.6267C6.81765 14.5217 8.39051 14.9995 9.99961 14.9995C11.6087 14.9995 13.1816 14.5217 14.5188 13.6267C15.8477 12.7373 16.8844 11.4756 17.4994 10C16.8844 8.52438 15.8477 7.26273 14.5188 6.3733C13.1816 5.47831 11.6087 5.00053 9.99961 5.00053ZM4.55341 4.98823C6.16494 3.90965 8.06044 3.33386 9.99961 3.33386C11.9388 3.33386 13.8343 3.90965 15.4458 4.98823C17.0573 6.06681 18.3123 7.5996 19.0517 9.39229C19.0554 9.40147 19.0591 9.41071 19.0625 9.42002C19.2014 9.79421 19.2014 10.2058 19.0625 10.58C19.0591 10.5893 19.0554 10.5986 19.0517 10.6077C18.3123 12.4004 17.0573 13.9332 15.4458 15.0118C13.8343 16.0904 11.9388 16.6662 9.99961 16.6662C8.06044 16.6662 6.16494 16.0904 4.55341 15.0118C2.94188 13.9332 1.68689 12.4004 0.947553 10.6077C0.943769 10.5986 0.940149 10.5893 0.936695 10.58C0.797794 10.2058 0.797794 9.79421 0.936695 9.42002C0.940149 9.41071 0.943769 9.40147 0.947553 9.39229C1.68689 7.5996 2.94188 6.06681 4.55341 4.98823ZM9.99961 8.33335C9.07913 8.33335 8.33294 9.07954 8.33294 10C8.33294 10.9205 9.07913 11.6667 9.99961 11.6667C10.9201 11.6667 11.6663 10.9205 11.6663 10C11.6663 9.07954 10.9201 8.33335 9.99961 8.33335ZM6.66627 10C6.66627 8.15907 8.15866 6.66668 9.99961 6.66668C11.8406 6.66668 13.3329 8.15907 13.3329 10C13.3329 11.841 11.8406 13.3333 9.99961 13.3333C8.15866 13.3333 6.66627 11.841 6.66627 10Z"
                          fill="#030712"
                        />
                      </svg>
                    </div>
                    <div className="text-gray-950 text-base font-semibold font-['Poppins SemiBold'] leading-loose">
                      400,123
                    </div>
                  </div>
                </div>
                <div className="w-24 flex-col justify-start items-start gap-2 inline-flex">
                  <div className="justify-start items-center gap-1 inline-flex">
                    <div data-svg-wrapper className="relative">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.8334 11.6667C17.075 10.45 18.3334 8.99167 18.3334 7.08333C18.3334 5.86776 17.8505 4.70197 16.9909 3.84243C16.1314 2.98289 14.9656 2.5 13.75 2.5C12.2834 2.5 11.25 2.91667 10 4.16667C8.75002 2.91667 7.71669 2.5 6.25002 2.5C5.03444 2.5 3.86866 2.98289 3.00911 3.84243C2.14957 4.70197 1.66669 5.86776 1.66669 7.08333C1.66669 9 2.91669 10.4583 4.16669 11.6667L10 17.5L15.8334 11.6667Z"
                          stroke="#4A5565"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="text-gray-950 text-base font-semibold font-['Poppins SemiBold'] leading-loose">
                      96
                    </div>
                  </div>
                </div>
                <div className="w-24 flex-col justify-start items-start gap-2 inline-flex">
                  <div className="justify-start items-center gap-1 inline-flex">
                    <div data-svg-wrapper className="relative">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.58335 16.6667C8.17383 17.4826 10.0034 17.7036 11.7424 17.2898C13.4814 16.8761 15.0155 15.8549 16.0681 14.4102C17.1208 12.9655 17.6229 11.1923 17.4838 9.41015C17.3448 7.62803 16.5738 5.95416 15.3099 4.69018C14.0459 3.4262 12.372 2.65523 10.5899 2.5162C8.80776 2.37717 7.03458 2.87922 5.58987 3.93189C4.14516 4.98456 3.12393 6.51861 2.71021 8.25761C2.29648 9.99661 2.51747 11.8262 3.33335 13.4167L1.66669 18.3333L6.58335 16.6667Z"
                          stroke="#4A5565"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="text-gray-950 text-base font-semibold font-['Poppins SemiBold'] leading-loose">
                      882
                    </div>
                  </div>
                </div>
                <div className="w-24 flex-col justify-start items-start gap-2 inline-flex">
                  <div className="justify-start items-center gap-1 inline-flex">
                    <div data-svg-wrapper className="relative">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.5 18.3333L5 15.8333M5 15.8333L7.5 13.3333M5 15.8333H13.3333C13.7754 15.8333 14.1993 15.6577 14.5118 15.3452C14.8244 15.0326 15 14.6087 15 14.1666V9.16665M12.5 1.66665L15 4.16665M15 4.16665L12.5 6.66665M15 4.16665H6.66667C6.22464 4.16665 5.80072 4.34224 5.48816 4.6548C5.17559 4.96736 5 5.39128 5 5.83331V10.8333"
                          stroke="#4A5565"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="text-gray-950 text-base font-semibold font-['Poppins SemiBold'] leading-loose">
                      96
                    </div>
                  </div>
                </div>
                <div className="w-24 flex-col justify-start items-start gap-2 inline-flex">
                  <div className="justify-start items-center gap-1 inline-flex">
                    <div data-svg-wrapper className="relative">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.66667 10C7.10869 10 7.53262 9.8244 7.84518 9.51184C8.15774 9.19928 8.33333 8.77536 8.33333 8.33333V6.66667H6.66667M11.6667 10C12.1087 10 12.5326 9.8244 12.8452 9.51184C13.1577 9.19928 13.3333 8.77536 13.3333 8.33333V6.66667H11.6667M17.5 12.5C17.5 12.942 17.3244 13.366 17.0118 13.6785C16.6993 13.9911 16.2754 14.1667 15.8333 14.1667H5.83333L2.5 17.5V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H15.8333C16.2754 2.5 16.6993 2.67559 17.0118 2.98816C17.3244 3.30072 17.5 3.72464 17.5 4.16667V12.5Z"
                          stroke="#4A5565"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="text-gray-950 text-base font-semibold font-['Poppins SemiBold'] leading-loose">
                      96
                    </div>
                  </div>
                </div>
                <div className="w-24 flex-col justify-start items-start gap-2 inline-flex">
                  <div className="justify-start items-center gap-1 inline-flex">
                    <div data-svg-wrapper className="relative">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.15833 11.2584L12.85 14.575M12.8417 5.42502L7.15833 8.74169M17.5 4.16669C17.5 5.5474 16.3807 6.66669 15 6.66669C13.6193 6.66669 12.5 5.5474 12.5 4.16669C12.5 2.78598 13.6193 1.66669 15 1.66669C16.3807 1.66669 17.5 2.78598 17.5 4.16669ZM7.5 10C7.5 11.3807 6.38071 12.5 5 12.5C3.61929 12.5 2.5 11.3807 2.5 10C2.5 8.61931 3.61929 7.50002 5 7.50002C6.38071 7.50002 7.5 8.61931 7.5 10ZM17.5 15.8334C17.5 17.2141 16.3807 18.3334 15 18.3334C13.6193 18.3334 12.5 17.2141 12.5 15.8334C12.5 14.4526 13.6193 13.3334 15 13.3334C16.3807 13.3334 17.5 14.4526 17.5 15.8334Z"
                          stroke="#4A5565"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="text-gray-950 text-base font-semibold font-['Poppins SemiBold'] leading-loose">
                      96
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-10 px-6 py-2 bg-white rounded-[32px] border border-gray-200 justify-center items-center gap-1 inline-flex">
          <div className="text-gray-950 text-sm font-medium font-['Noto Sans CJK TC']">
            分析串文
          </div>
        </div>
      </div> */}
    </div>
  );
}
