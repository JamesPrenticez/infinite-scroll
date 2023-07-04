import React, { type ReactElement } from "react";

interface Props {
  width: number | string;
}

const Logo = ({ width = 32 }: Props): ReactElement => {
  return (
    <svg
      width={width}
      viewBox="0 0 600 600"
      xmlns="http://www.w3.org/2000/svg"
      fill="#fff"
    >
      <path d=" M 453.53 69.62 C 468.49 68.94 483.46 69.37 498.43 69.17 C 496.88 70.34 494.84 70.22 493.01 70.34 C 482.98 70.05 472.92 70.11 462.90 70.68 C 459.77 70.54 456.52 70.70 453.53 69.62 Z" />
      <path d=" M 432.05 71.19 C 442.64 69.89 453.38 70.14 464.01 70.85 C 475.34 70.88 486.67 70.72 498.00 70.76 C 500.97 70.52 503.23 72.90 504.56 75.29 C 527.07 112.48 548.24 150.69 564.22 191.19 C 567.25 198.64 569.39 206.42 572.23 213.94 C 573.10 221.82 570.95 229.61 571.24 237.49 C 570.81 237.58 570.39 237.66 569.97 237.75 C 569.66 246.16 569.79 254.67 568.04 262.94 C 565.65 284.15 561.54 305.14 556.85 325.96 C 553.59 340.24 549.32 354.28 544.12 367.96 C 542.21 372.05 540.72 376.36 538.46 380.27 C 534.51 384.98 527.92 386.23 522.10 386.60 C 522.67 386.87 523.25 387.14 523.84 387.42 C 516.77 387.70 510.11 390.66 503.01 390.97 C 500.56 392.07 498.00 392.67 495.32 392.98 C 473.05 397.60 450.53 400.86 427.97 403.42 C 420.60 403.48 413.35 404.99 406.01 405.38 C 395.37 405.73 384.72 405.85 374.09 405.66 C 373.72 405.47 372.99 405.10 372.63 404.91 C 383.39 404.12 394.20 405.05 404.99 404.43 C 396.98 404.07 388.99 404.75 381.00 404.24 C 377.46 404.16 373.88 405.17 370.39 404.47 C 365.57 401.01 366.35 393.00 371.83 390.64 C 378.86 390.10 385.94 390.89 392.99 390.37 C 399.58 389.89 406.17 391.13 412.74 390.53 C 408.80 389.58 404.63 391.27 400.80 389.70 C 414.75 389.17 428.68 387.88 442.52 386.08 C 446.68 385.50 450.80 384.50 455.03 384.43 C 462.43 384.10 469.51 380.83 476.99 381.52 C 475.99 381.27 474.99 381.02 474.00 380.77 C 491.56 378.54 508.80 374.24 526.01 370.16 C 533.28 354.54 538.01 337.88 542.00 321.16 C 543.21 315.52 545.28 309.91 544.43 304.05 C 544.66 305.33 544.92 306.63 545.19 307.92 C 545.54 304.99 545.91 302.07 546.32 299.16 C 546.71 299.74 547.19 300.25 547.74 300.67 C 548.08 297.76 547.05 294.81 547.81 291.93 C 548.83 287.33 549.45 282.64 549.73 277.94 C 550.02 279.28 550.31 280.63 550.59 281.98 C 550.09 277.55 550.64 273.12 551.73 268.83 C 552.78 259.27 554.09 249.75 554.85 240.15 C 555.09 237.93 555.77 235.60 554.59 233.52 C 550.47 235.15 546.08 235.84 541.66 235.65 C 541.64 235.89 541.61 236.38 541.59 236.63 C 536.68 236.35 531.88 237.56 527.00 237.61 C 528.97 237.91 530.94 238.24 532.92 238.59 C 527.79 238.26 522.58 238.20 517.56 239.45 C 512.63 240.62 507.52 239.82 502.58 240.88 C 499.44 241.56 496.21 241.36 493.03 241.49 C 487.33 241.61 481.73 242.82 476.05 243.17 C 465.01 243.14 453.97 243.62 442.94 243.78 C 438.56 243.59 434.31 244.99 429.93 244.63 C 421.28 244.86 412.56 244.12 403.98 245.45 C 398.61 245.36 393.22 245.76 387.87 245.12 C 389.14 244.87 391.66 244.35 392.92 244.09 C 391.74 243.44 390.49 242.90 389.28 242.32 C 392.52 242.21 395.72 243.22 398.97 242.68 C 407.99 241.27 417.09 240.45 426.04 238.63 C 431.78 238.31 437.27 236.31 443.04 236.24 C 441.70 235.95 440.36 235.68 439.03 235.42 C 443.01 235.83 447.03 235.46 450.87 234.32 C 465.31 231.94 479.68 229.22 494.02 226.31 C 498.29 225.54 502.48 223.96 506.90 224.41 C 506.27 224.16 505.66 223.91 505.05 223.66 C 508.35 223.31 511.59 222.48 514.93 222.43 C 514.32 222.17 513.72 221.90 513.13 221.63 C 515.06 221.57 517.04 221.64 518.95 221.21 C 526.36 219.25 533.94 218.04 541.37 216.12 C 545.89 215.46 550.19 213.68 554.77 213.34 C 554.58 211.83 554.51 210.29 553.98 208.86 C 540.81 171.54 522.05 136.51 502.37 102.27 C 498.80 96.34 495.39 90.32 491.67 84.49 C 482.78 84.78 473.86 84.03 465.02 85.13 C 454.61 85.31 444.20 85.65 433.82 86.56 C 431.41 87.75 428.61 87.20 426.03 87.44 C 416.36 87.36 406.84 90.19 397.15 89.48 C 397.78 89.78 398.42 90.09 399.05 90.40 C 394.70 90.54 390.34 90.67 386.10 91.73 C 382.78 92.59 379.21 92.07 376.00 93.33 C 367.21 93.90 358.72 96.72 349.89 96.93 C 348.82 97.03 348.15 98.07 347.09 98.22 C 339.96 98.84 333.10 101.07 326.02 102.03 C 314.66 104.63 303.28 107.16 291.98 110.00 C 291.13 116.61 294.11 123.26 293.68 130.00 C 293.96 128.68 294.25 127.36 294.54 126.04 C 294.42 128.41 294.30 130.79 294.62 133.15 C 297.08 143.52 298.87 154.07 301.96 164.29 C 303.12 170.00 305.40 175.38 306.64 181.07 C 308.37 185.29 308.62 190.55 312.35 193.64 L 309.57 191.96 L 310.36 195.50 C 309.52 194.04 308.74 192.55 308.20 190.95 C 298.53 175.88 292.74 158.73 287.24 141.81 C 286.27 139.01 285.50 136.16 285.04 133.24 C 284.12 131.98 283.35 130.64 282.76 129.20 C 282.29 135.13 282.26 141.08 282.60 147.02 C 282.41 144.35 282.17 141.67 281.83 139.02 C 281.75 142.03 281.24 145.00 280.82 147.98 C 280.52 152.66 280.85 157.36 280.62 162.05 C 280.64 164.96 278.06 166.85 276.18 168.68 C 272.00 169.46 267.16 168.46 265.43 164.11 C 265.12 157.71 265.32 151.27 265.68 144.87 C 266.97 141.76 266.27 138.28 266.77 135.01 C 268.10 124.74 269.58 114.45 272.50 104.48 C 273.44 101.64 275.95 99.72 278.17 97.87 C 284.21 95.50 290.73 94.60 296.95 92.77 C 311.59 89.14 326.40 86.29 341.16 83.22 C 340.14 82.93 339.13 82.65 338.13 82.39 C 346.91 83.90 355.31 79.59 364.03 79.41 C 386.58 75.76 409.24 72.58 432.05 71.19 Z" />
      <path d=" M 405.66 135.79 C 411.73 134.97 417.90 133.41 424.01 134.89 C 430.64 135.47 437.28 138.17 441.59 143.40 C 446.75 149.01 445.74 158.27 440.64 163.59 C 435.33 170.04 427.33 173.26 419.39 175.08 C 410.46 176.29 400.98 175.70 393.04 171.08 C 387.97 168.33 383.91 162.95 384.18 157.00 C 384.02 153.27 385.64 149.70 387.98 146.88 C 392.36 141.26 398.94 137.81 405.66 135.79 Z" />
      <path d=" M 203.97 145.50 C 207.83 143.85 212.09 144.27 216.16 144.50 C 249.34 164.38 281.45 186.11 311.72 210.19 C 321.39 218.18 331.14 226.09 340.08 234.90 C 345.67 239.59 350.98 244.66 355.65 250.29 C 357.43 252.32 359.71 254.16 360.34 256.93 C 362.21 264.83 360.79 273.05 362.35 280.99 C 362.78 304.64 362.63 328.29 362.64 351.95 C 362.39 358.30 362.96 364.71 361.89 371.01 C 361.50 383.21 361.02 395.42 359.57 407.54 C 359.30 413.69 357.84 419.73 358.02 425.93 C 356.59 427.21 356.11 429.15 355.05 430.70 C 349.60 436.99 343.10 442.22 336.96 447.80 C 301.15 478.09 259.94 501.92 215.97 518.19 C 212.36 519.31 208.52 518.98 204.85 518.45 C 203.33 516.24 201.64 513.84 202.23 510.99 C 202.09 507.99 204.62 506.06 206.83 504.57 C 207.61 504.52 209.15 504.42 209.93 504.38 C 209.36 504.11 208.80 503.86 208.24 503.62 C 209.52 503.53 210.77 503.30 212.00 502.95 C 250.41 488.65 286.46 468.10 318.54 442.61 C 326.79 435.97 334.71 428.93 342.30 421.55 C 343.23 410.38 345.53 399.27 345.48 388.02 C 346.96 378.74 346.16 369.30 347.00 359.97 C 347.61 339.00 347.59 317.95 346.90 296.99 C 347.51 288.90 347.21 280.78 346.22 272.73 C 345.74 272.67 344.77 272.56 344.28 272.51 C 328.75 282.84 311.89 290.98 295.24 299.32 C 265.37 313.71 234.75 326.50 203.94 338.72 C 200.57 339.78 197.45 342.02 193.77 341.59 C 196.65 339.40 200.03 338.04 203.17 336.31 C 249.57 311.72 294.08 283.74 337.73 254.60 C 324.82 240.98 310.18 229.16 295.53 217.49 C 268.54 196.58 240.27 177.25 210.93 159.82 C 198.91 163.08 187.38 167.84 175.86 172.53 C 132.90 190.80 92.21 213.94 52.56 238.46 C 52.24 239.42 52.45 240.24 53.19 240.90 C 70.91 260.45 89.65 279.06 108.67 297.34 C 115.99 303.67 122.46 310.94 129.96 317.08 C 138.91 325.77 148.40 333.90 157.67 342.24 C 157.27 342.71 156.88 343.19 156.48 343.66 C 155.34 340.61 151.66 339.97 149.29 338.14 C 111.21 314.69 75.63 287.34 41.73 258.23 C 41.56 274.49 41.66 290.75 41.86 307.00 C 43.25 315.93 43.30 324.97 43.84 333.96 C 45.13 345.22 45.79 356.62 46.88 367.94 C 48.30 371.45 47.38 375.32 48.03 378.97 C 48.36 380.96 48.56 382.97 48.51 384.99 C 48.83 383.01 49.23 381.05 49.61 379.08 C 48.59 387.84 51.24 396.40 52.01 405.08 C 52.11 403.46 52.16 401.83 52.46 400.24 C 53.33 402.81 52.35 405.53 52.58 408.17 C 53.66 410.96 55.80 413.15 57.68 415.41 C 69.50 428.27 82.53 439.93 95.86 451.18 C 114.14 466.64 132.90 481.53 152.00 495.97 C 154.18 497.73 156.91 499.19 157.99 501.94 C 158.89 503.78 158.46 505.89 158.53 507.87 C 158.20 507.31 157.88 506.75 157.56 506.19 C 158.23 509.30 155.26 510.88 153.24 512.52 C 151.46 512.48 149.68 512.45 147.90 512.44 C 123.94 494.84 100.84 476.08 78.17 456.85 C 67.20 446.83 55.84 437.18 46.07 425.95 C 43.23 422.21 39.40 418.95 38.08 414.29 C 36.70 409.98 36.63 405.41 35.70 401.02 C 35.30 393.70 32.84 386.57 33.40 379.19 C 33.19 379.68 32.77 380.67 32.57 381.16 C 32.71 375.38 31.88 369.68 30.92 364.00 C 29.27 344.04 26.71 324.08 27.52 304.00 C 27.87 283.03 27.88 262.03 27.65 241.05 C 26.82 238.37 28.66 236.21 30.00 234.10 C 64.75 212.04 100.27 191.06 137.23 172.88 C 158.82 162.26 181.01 152.75 203.97 145.50 Z" />
      <path d=" M 163.27 237.01 C 167.31 228.89 176.38 224.78 184.92 223.31 C 192.36 221.63 199.96 223.04 207.26 224.70 C 207.37 224.86 207.59 225.19 207.69 225.36 C 215.10 227.86 222.20 233.87 223.21 242.01 C 223.51 247.77 220.25 253.31 215.61 256.62 C 206.99 263.33 195.49 264.26 185.00 263.14 C 178.81 261.77 172.52 259.66 167.85 255.18 C 162.79 250.85 160.10 243.21 163.27 237.01 Z" />
      <path d=" M 26.30 247.98 C 26.54 245.24 25.61 242.18 27.05 239.69 C 27.45 257.77 27.07 275.88 27.28 293.98 C 27.70 301.01 27.34 308.07 26.53 315.06 C 26.46 292.71 26.17 270.34 26.30 247.98 Z" />
      <path d=" M 492.01 262.47 C 501.84 258.28 514.02 258.02 523.29 263.80 C 527.33 266.10 529.28 270.54 530.11 274.93 C 529.58 276.56 529.28 278.26 529.02 279.96 C 520.60 293.55 500.86 297.14 487.23 289.72 C 483.38 287.03 479.16 283.10 479.56 277.97 C 479.41 270.64 485.87 265.26 492.01 262.47 Z" />
      <path d=" M 389.15 269.62 C 393.08 268.90 397.09 268.66 401.01 267.85 C 407.15 268.80 413.84 269.08 418.98 273.05 C 424.11 276.09 427.55 281.98 426.30 288.04 C 425.92 286.35 425.61 284.65 425.33 282.96 C 425.59 285.33 425.69 287.72 425.64 290.12 C 420.56 298.43 410.33 302.17 400.93 301.67 C 392.46 302.02 383.24 298.99 378.17 291.87 C 375.61 288.86 376.18 284.61 376.59 280.98 C 379.12 275.42 384.64 270.80 390.83 270.27 C 390.26 270.05 389.70 269.84 389.15 269.62 Z" />
      <path d=" M 60.23 311.09 C 63.48 306.81 69.45 305.72 74.27 307.82 C 82.12 312.06 87.11 320.35 88.57 328.99 C 89.09 336.11 89.69 344.66 83.66 349.78 C 80.64 352.98 76.07 352.65 72.08 352.19 C 63.30 347.85 57.60 338.58 56.56 328.99 C 56.16 322.90 56.00 316.00 60.23 311.09 Z" />
      <path d=" M 318.02 306.49 C 320.39 306.42 322.76 306.46 325.13 306.63 C 323.79 306.99 322.44 307.31 321.09 307.62 C 322.78 307.48 324.48 307.39 326.18 307.32 C 328.67 309.31 331.31 311.55 332.08 314.81 C 335.07 326.80 329.12 340.02 318.76 346.48 C 313.95 349.32 306.58 349.79 302.94 344.86 C 299.86 340.70 298.87 335.02 300.02 330.01 C 301.33 321.20 306.55 312.81 314.35 308.35 C 315.94 307.21 317.95 307.46 319.79 307.49 C 319.20 307.16 318.60 306.82 318.02 306.49 Z" />
      <path d=" M 488.89 334.82 C 495.84 333.15 503.21 333.48 509.91 336.02 C 515.09 338.17 519.81 342.29 521.25 347.88 C 522.04 354.03 517.57 359.57 512.66 362.72 C 509.04 364.63 505.20 367.08 500.92 366.46 C 495.62 365.87 490.29 366.30 485.00 366.51 C 480.13 365.30 475.44 362.48 472.61 358.26 C 470.72 354.89 470.79 350.65 471.87 347.04 C 474.66 341.04 480.77 337.29 486.90 335.46 C 493.28 335.50 499.70 336.18 506.10 335.56 C 500.40 334.65 494.54 335.87 488.89 334.82 Z" />
      <path d=" M 384.14 345.87 C 391.26 342.28 399.42 343.08 407.11 343.40 C 413.04 344.82 419.83 348.05 421.72 354.30 C 421.94 354.37 422.39 354.49 422.61 354.56 C 422.63 357.19 422.61 359.82 422.54 362.45 C 422.33 362.49 421.92 362.57 421.71 362.61 C 419.89 368.08 414.73 371.28 409.93 373.90 C 401.57 376.89 392.12 377.61 383.72 374.40 C 378.28 372.03 372.50 367.57 372.45 361.08 C 372.13 353.99 378.25 348.65 384.14 345.87 Z" />
      <path d=" M 173.69 355.70 C 175.04 363.66 175.34 371.82 177.10 379.74 C 177.71 382.80 177.09 386.08 178.36 389.00 C 178.77 392.98 178.66 397.06 180.10 400.86 C 181.67 418.05 185.30 435.02 186.99 452.22 C 188.63 457.66 188.03 463.39 189.19 468.90 C 190.97 483.19 193.06 497.67 191.23 512.07 C 189.97 516.21 187.79 520.74 183.53 522.46 C 180.51 523.26 177.02 522.62 175.03 520.05 C 169.46 514.51 169.71 506.19 168.66 498.97 C 168.57 486.99 168.70 475.00 168.60 463.02 C 168.44 460.28 169.59 457.69 169.47 454.96 C 169.39 444.31 169.67 433.67 169.70 423.02 C 171.01 411.75 170.63 400.35 170.89 389.01 C 170.55 385.66 172.07 382.14 170.55 378.97 C 170.03 376.11 169.92 373.10 170.54 370.25 C 170.94 372.75 170.55 375.34 171.24 377.81 C 172.23 376.53 171.48 374.54 171.80 373.02 C 173.46 367.36 171.13 361.15 173.69 355.70 Z" />
      <path d=" M 485.90 367.21 C 491.56 366.62 497.39 366.46 503.04 367.21 C 497.34 367.77 491.59 367.87 485.90 367.21 Z" />
      <path d=" M 275.93 372.04 C 279.25 369.80 283.40 370.44 287.18 370.54 C 290.83 372.92 293.83 376.47 294.38 380.93 C 296.16 394.06 287.97 408.41 275.08 412.38 C 269.24 413.30 263.70 409.35 262.04 403.82 C 259.24 391.75 265.32 378.30 275.93 372.04 Z" />
      <path d=" M 118.76 418.42 C 121.79 418.48 124.95 417.92 127.88 418.84 C 135.63 422.37 141.15 429.86 143.46 437.93 C 144.22 443.71 144.03 449.59 143.44 455.38 C 141.27 458.83 138.33 462.25 133.99 462.65 C 127.05 463.18 120.58 458.72 116.91 453.09 C 111.59 446.06 109.47 436.74 111.11 428.09 C 112.24 423.95 115.06 420.54 118.76 418.42 Z" />
      <path d=" M 220.66 455.74 C 222.66 446.55 228.74 437.47 237.95 434.34 C 240.94 433.10 244.19 433.90 247.14 434.83 C 243.88 435.56 240.53 435.18 237.23 435.44 C 240.84 436.08 244.55 435.59 248.19 435.34 C 251.16 438.50 253.47 442.48 252.87 446.99 C 254.08 458.82 246.74 470.56 236.02 475.39 C 232.20 475.58 227.76 476.46 224.71 473.50 C 219.46 469.19 220.07 461.81 220.66 455.74 Z" />
    </svg>
  );
};

export default Logo;