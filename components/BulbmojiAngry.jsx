import React from 'react';
import { View } from 'react-native';
import Svg, { 
  Rect, 
  Path, 
  G, 
  Defs, 
  Stop, 
  ClipPath, 
  LinearGradient
} from 'react-native-svg';

const BulbmojiAngry = ({ width, height, opacity }) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 125 125"
      fill="none"
      opacity={opacity}
    >
      <G clipPath="url(#clip0_26_243)">
        <Rect width={125} height={125} rx={21} fill="#FFC107" />
      <Rect x={3.5} y={3.5} width={118} height={118} rx={17.5} fill="#FFC107" />
      <Rect
        x={3.5}
        y={3.5}
        width={118}
        height={118}
        rx={17.5}
        fill="url(#paint0_linear_26_243)"
      />
      <Rect
        x={3.5}
        y={3.5}
        width={118}
        height={118}
        rx={17.5}
        stroke="black"
        strokeWidth={7}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M38.9519 55.133C39.6433 55.5322 40.0473 56.3093 39.861 57.0857C38.6924 61.9544 34.3105 65.5728 29.0834 65.5728C22.9622 65.5728 18 60.6107 18 54.4895C18 51.3285 19.3233 48.4765 21.4462 46.4574C22.0257 45.9061 22.902 45.8666 23.5947 46.2665L38.9519 55.133Z"
        fill="black"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M85.6941 55.133C85.0027 55.5322 84.5987 56.3093 84.785 57.0857C85.9535 61.9544 90.3355 65.5728 95.5626 65.5728C101.684 65.5728 106.646 60.6107 106.646 54.4895C106.646 51.3285 105.323 48.4765 103.2 46.4574C102.62 45.9061 101.744 45.8666 101.051 46.2665L85.6941 55.133Z"
        fill="black"
      />
      <Rect x={30} y={75} width={65} height={22} rx={4} fill="black" />
      <Path
        d="M85.361 89.5635C85.361 88.4927 85.6412 87.6398 86.2015 87.0048C86.7618 86.3698 87.54 86.0523 88.5361 86.0523C89.5446 86.0523 90.3166 86.3636 90.852 86.9861C91.3874 87.6087 91.6551 88.474 91.6551 89.5822C91.6551 90.6779 91.3874 91.5308 90.852 92.1409C90.3166 92.7385 89.5571 93.0374 88.5734 93.0374C87.5898 93.0374 86.8054 92.7261 86.2202 92.1035C85.6474 91.4685 85.361 90.6218 85.361 89.5635ZM88.4987 90.7962C89.2582 90.7962 89.638 90.3728 89.638 89.5261C89.638 89.0779 89.5446 88.7604 89.3578 88.5736C89.1835 88.3869 88.8971 88.2935 88.4987 88.2935C88.1127 88.2935 87.8326 88.3931 87.6583 88.5923C87.4839 88.7791 87.3968 89.0966 87.3968 89.5448C87.3968 89.9931 87.4839 90.3168 87.6583 90.516C87.845 90.7028 88.1252 90.7962 88.4987 90.7962ZM77.4981 82.7652C77.4981 81.6944 77.7783 80.8415 78.3386 80.2065C78.8989 79.5715 79.6771 79.254 80.6732 79.254C81.6693 79.254 82.435 79.5652 82.9704 80.1878C83.5183 80.8104 83.7922 81.6695 83.7922 82.7652C83.7922 83.8609 83.5183 84.7138 82.9704 85.3239C82.435 85.9215 81.6755 86.2204 80.6919 86.2204C79.7207 86.2204 78.9425 85.9091 78.3573 85.2865C77.7845 84.664 77.4981 83.8235 77.4981 82.7652ZM80.6358 83.9792C81.3829 83.9792 81.7564 83.5621 81.7564 82.7278C81.7564 82.2796 81.6693 81.9621 81.495 81.7753C81.3206 81.5886 81.0343 81.4952 80.6358 81.4952C80.2498 81.4952 79.9635 81.5948 79.7767 81.794C79.6024 81.9808 79.5152 82.2983 79.5152 82.7465C79.5152 83.1823 79.6086 83.4998 79.7954 83.699C79.9821 83.8858 80.2623 83.9792 80.6358 83.9792ZM87.5275 78.787C87.6894 78.5007 87.845 78.3575 87.9944 78.3575C88.1563 78.3575 88.3867 78.4384 88.6855 78.6003C88.9843 78.7621 89.1337 78.9365 89.1337 79.1232C89.1337 79.2104 89.0901 79.3287 89.003 79.4781L81.7751 93.1307L81.7378 93.1868C81.6008 93.4358 81.4576 93.5603 81.3082 93.5603C81.1588 93.5603 80.9346 93.4794 80.6358 93.3175C80.337 93.1681 80.1876 93.0187 80.1876 92.8693C80.1876 92.7199 80.2312 92.5704 80.3183 92.421L87.5275 78.787Z"
        fill="white"
      />
      <Path
        d="M74.5468 82.8959H75.4993C75.7359 82.8959 75.904 82.9084 76.0036 82.9333C76.1156 82.9457 76.2215 83.008 76.3211 83.12C76.4207 83.2321 76.4705 83.4002 76.4705 83.6243C76.4705 83.836 76.4456 84.0726 76.3958 84.334C76.3584 84.5831 76.265 84.8009 76.1156 84.9877C75.9662 85.1745 75.823 85.2803 75.6861 85.3052C75.5491 85.3301 75.3437 85.3426 75.0697 85.3426H74.1359L73.7997 87.397H74.7522C74.9888 87.397 75.1569 87.4095 75.2565 87.4344C75.3686 87.4468 75.4744 87.5091 75.574 87.6211C75.6736 87.7332 75.7234 87.9013 75.7234 88.1254C75.7234 88.3371 75.7047 88.5487 75.6674 88.7604C75.63 88.9721 75.5678 89.1651 75.4806 89.3394C75.4059 89.5137 75.3001 89.6382 75.1631 89.7129C74.9639 89.8125 74.6838 89.8623 74.3227 89.8623H73.3888C73.2643 90.6343 73.1896 91.1137 73.1647 91.3004L73.1274 91.5059C73.0776 91.7798 73.034 91.9728 72.9966 92.0849C72.9717 92.1969 72.9095 92.3339 72.8099 92.4957C72.6106 92.7821 72.1499 92.9253 71.4278 92.9253C70.7056 92.9253 70.3445 92.695 70.3445 92.2343C70.3445 92.2218 70.3943 91.8981 70.4939 91.2631L70.7181 89.8623H67.9352C67.8107 90.6343 67.736 91.1137 67.7111 91.3004L67.6738 91.5059C67.624 91.7798 67.5804 91.9728 67.543 92.0849C67.5181 92.1969 67.4559 92.3339 67.3563 92.4957C67.157 92.7821 66.6964 92.9253 65.9742 92.9253C65.252 92.9253 64.8909 92.695 64.8909 92.2343C64.8909 92.2218 64.9407 91.8981 65.0404 91.2631L65.2645 89.8623H64.0318C63.5089 89.8623 63.1976 89.7503 63.098 89.5261C63.0606 89.4265 63.0419 89.2834 63.0419 89.0966C63.0419 88.8974 63.0606 88.6732 63.098 88.4242C63.1478 88.1628 63.2474 87.9386 63.3968 87.7519C63.5587 87.5651 63.7081 87.4593 63.845 87.4344C63.982 87.4095 64.1875 87.397 64.4614 87.397H65.6754L66.0115 85.3426H64.7789C64.2435 85.3426 63.9322 85.2367 63.845 85.0251C63.8077 84.913 63.789 84.7636 63.789 84.5768C63.789 84.3901 63.8077 84.1722 63.845 83.9231C63.8948 83.6617 63.9945 83.4375 64.1439 83.2508C64.3057 83.064 64.4552 82.9582 64.5921 82.9333C64.7291 82.9084 64.9345 82.8959 65.2084 82.8959H66.4224L66.7399 80.9722C66.7524 80.8975 66.7648 80.7792 66.7773 80.6174C66.8022 80.443 66.8209 80.3248 66.8333 80.2625C66.8582 80.1878 66.8893 80.0882 66.9267 79.9637C66.9641 79.8392 67.0139 79.752 67.0761 79.7022C67.1508 79.6524 67.2442 79.5901 67.3563 79.5154C67.5306 79.4034 67.8481 79.3474 68.3088 79.3474C68.7695 79.3474 69.087 79.4158 69.2613 79.5528C69.4481 79.6773 69.5414 79.8703 69.5414 80.1318C69.5414 80.1691 69.5103 80.387 69.4481 80.7855L69.0932 82.8959H71.876L72.1935 80.9722C72.206 80.8975 72.2184 80.7792 72.2309 80.6174C72.2558 80.443 72.2745 80.3248 72.2869 80.2625C72.3118 80.1878 72.3429 80.0882 72.3803 79.9637C72.4176 79.8392 72.4675 79.752 72.5297 79.7022C72.6044 79.6524 72.6978 79.5901 72.8099 79.5154C72.9842 79.4034 73.3017 79.3474 73.7624 79.3474C74.2231 79.3474 74.5406 79.4158 74.7149 79.5528C74.9016 79.6773 74.995 79.8703 74.995 80.1318C74.995 80.1691 74.9639 80.387 74.9016 80.7855L74.5468 82.8959ZM71.129 87.397L71.4651 85.3426H68.701L68.3461 87.397H71.129Z"
        fill="white"
      />
      <Path
        d="M58.7164 90.1612C58.8409 89.9121 59.0277 89.744 59.2767 89.6569C59.5382 89.5697 59.9366 89.5261 60.472 89.5261C61.0199 89.5261 61.4121 89.6444 61.6486 89.881C61.8977 90.1176 62.0222 90.4911 62.0222 91.0016V91.3004C62.0222 91.5993 62.0097 91.8234 61.9848 91.9728C61.9724 92.1098 61.9163 92.2778 61.8167 92.4771C61.6175 92.8382 61.1381 93.0187 60.3786 93.0187C59.6316 93.0187 59.1335 92.9004 58.8845 92.6638C58.6479 92.4148 58.5296 91.9417 58.5296 91.2444C58.5296 90.7588 58.5919 90.3977 58.7164 90.1612ZM61.2191 87.976C60.9825 88.0382 60.665 88.0694 60.2666 88.0694C59.8681 88.0694 59.5506 88.0382 59.3141 87.976C59.0775 87.9137 58.9094 87.8017 58.8098 87.6398C58.7226 87.4779 58.6666 87.3348 58.6417 87.2102C58.6292 87.0857 58.623 86.8927 58.623 86.6313V80.7107C58.623 80.4493 58.6292 80.2563 58.6417 80.1318C58.6666 79.9948 58.7288 79.8454 58.8285 79.6835C58.9281 79.5217 59.0962 79.4096 59.3327 79.3474C59.5693 79.2726 59.8868 79.2353 60.2852 79.2353C60.6837 79.2353 61.0012 79.2726 61.2378 79.3474C61.4743 79.4096 61.6362 79.5279 61.7233 79.7022C61.823 79.8641 61.879 80.0135 61.8914 80.1504C61.9163 80.275 61.9288 80.468 61.9288 80.7294V86.6499C61.9288 86.9114 61.9163 87.1044 61.8914 87.2289C61.879 87.3534 61.823 87.4966 61.7233 87.6585C61.6237 87.8079 61.4556 87.9137 61.2191 87.976Z"
        fill="white"
      />
      <Path
        d="M57.3229 88.4616C57.3229 89.4328 57.0428 90.211 56.4825 90.7962C55.9222 91.3814 55.2436 91.7674 54.4467 91.9541V93.1494C54.4467 93.5852 54.4032 93.8903 54.316 94.0646C54.2413 94.2389 54.123 94.3572 53.9611 94.4194C53.8117 94.4817 53.6063 94.5128 53.3448 94.5128C53.0833 94.5128 52.8717 94.4817 52.7098 94.4194C52.5604 94.3572 52.4545 94.2451 52.3923 94.0833C52.3051 93.8716 52.2616 93.5541 52.2616 93.1307V91.9728C51.7511 91.8607 51.2904 91.674 50.8795 91.4125C50.4686 91.151 50.1822 90.9207 50.0204 90.7215L49.7776 90.404C49.5161 90.0678 49.3853 89.7752 49.3853 89.5261C49.3853 89.2771 49.597 88.9472 50.0204 88.5363C50.2694 88.2997 50.5308 88.1814 50.8048 88.1814C51.0912 88.1814 51.4834 88.4304 51.9814 88.9285C52.3674 89.4016 52.8032 89.6382 53.2888 89.6382C54.2102 89.6382 54.6708 89.2584 54.6708 88.4989C54.6708 88.225 54.4965 88.0133 54.1479 87.8639C53.7993 87.7145 53.3759 87.5838 52.8779 87.4717C52.3798 87.3472 51.8818 87.1853 51.3838 86.9861C50.8857 86.7869 50.4624 86.4445 50.1137 85.9589C49.7651 85.4733 49.5908 84.857 49.5908 84.1099C49.5908 83.3628 49.8274 82.6905 50.3005 82.0928C50.7736 81.4952 51.4273 81.1092 52.2616 80.9349V79.889C52.2616 79.4656 52.2989 79.1606 52.3736 78.9738C52.4981 78.675 52.8281 78.5256 53.3635 78.5256C53.6997 78.5256 53.9487 78.6003 54.1105 78.7497C54.2849 78.8867 54.3845 79.0361 54.4094 79.1979C54.4343 79.3598 54.4467 79.5964 54.4467 79.9076V80.9535C54.7954 81.0283 55.1129 81.1341 55.3992 81.271C55.6856 81.408 55.8848 81.5201 55.9969 81.6072L56.165 81.7566L56.2397 81.8127C56.551 82.099 56.7066 82.3356 56.7066 82.5224C56.7066 82.7092 56.5572 83.0204 56.2584 83.4562C55.972 83.892 55.6545 84.1099 55.3059 84.1099C55.0817 84.1099 54.8887 84.0539 54.7269 83.9418C54.5775 83.8298 54.4592 83.7364 54.372 83.6617C54.2849 83.587 54.2039 83.5247 54.1292 83.4749C53.9176 83.3379 53.6499 83.2695 53.3261 83.2695C53.0024 83.2695 52.7347 83.3504 52.523 83.5123C52.3114 83.6617 52.2055 83.8733 52.2055 84.1473C52.2055 84.4212 52.33 84.6453 52.5791 84.8196C52.8405 84.9815 53.158 85.0935 53.5316 85.1558C53.9051 85.2056 54.316 85.299 54.7642 85.436C55.2125 85.5605 55.6234 85.7099 55.9969 85.8842C56.3704 86.0585 56.6817 86.3698 56.9307 86.818C57.1922 87.2538 57.3229 87.8017 57.3229 88.4616Z"
        fill="white"
      />
      <Path
        d="M47.0125 93.0187C45.9293 93.0187 44.8585 92.7385 43.8001 92.1782C42.6173 92.8257 41.422 93.1494 40.2142 93.1494C37.0143 93.1494 35.4143 91.8172 35.4143 89.1526C35.4143 87.7705 36.1302 86.4881 37.5621 85.3052C37.0641 84.1971 36.8151 83.1947 36.8151 82.2983C36.8151 81.0532 37.1886 80.1318 37.9357 79.5341C38.6827 78.9365 39.685 78.6376 40.9426 78.6376C42.2002 78.6376 43.1527 78.9365 43.8001 79.5341C44.4476 80.1318 44.7713 80.9473 44.7713 81.9808C44.7713 82.8523 44.4165 83.6368 43.7068 84.334C43.1838 84.857 42.4492 85.436 41.5029 86.071C42.2375 87.0421 43.0344 87.8639 43.8935 88.5363C44.2422 88.0009 44.485 87.453 44.6219 86.8927C44.7464 86.3449 45.3067 86.071 46.3028 86.071C46.7262 86.071 47.0437 86.127 47.2553 86.239C47.4795 86.3511 47.604 86.4694 47.6289 86.5939C47.6662 86.706 47.6787 86.8554 47.6662 87.0421C47.6164 87.9884 47.2304 88.9285 46.5083 89.8623C46.695 89.8997 46.8693 89.9184 47.0312 89.9184C48.0024 89.9184 48.488 90.4102 48.488 91.3938C48.488 92.0786 48.3759 92.5206 48.1518 92.7199C47.9277 92.9191 47.5479 93.0187 47.0125 93.0187ZM39.766 82.0741C39.766 82.5224 39.8718 83.0267 40.0835 83.587C40.6687 83.2134 41.1045 82.9021 41.3908 82.6531C41.6897 82.4041 41.8391 82.1675 41.8391 81.9434C41.8391 81.3956 41.534 81.1216 40.9239 81.1216C40.152 81.1216 39.766 81.4391 39.766 82.0741ZM40.345 90.3853C40.6562 90.3853 40.9364 90.3604 41.1854 90.3106C40.4632 89.6631 39.7784 88.8911 39.131 87.9947C38.8446 88.3557 38.7014 88.7293 38.7014 89.1153C38.7014 89.9619 39.2493 90.3853 40.345 90.3853Z"
        fill="white"
      />
    </G>
    <Rect
      x={3.5}
      y={3.5}
      width={118}
      height={118}
      rx={17.5}
      stroke="black"
      strokeWidth={7}
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_26_243"
        x1={62.5}
        y1={0}
        x2={62.5}
        y2={125}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FF0000" stopOpacity={0} />
        <Stop offset={1} stopColor="#FF0000" />
      </LinearGradient>
      <ClipPath id="clip0_26_243">
        <Rect width={125} height={125} rx={21} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
  );
};

export default BulbmojiAngry; 