import React from "react";

import { TaxedMoney } from "@components/containers";
import { Thumbnail } from "@components/molecules";
import { AddToWishlist } from "@components/organisms";

import * as S from "./styles";
import { IProps } from "./types";

export const ProductTile: React.FC<IProps> = ({ product }: IProps) => {
  const price =
    product.pricing &&
    product.pricing.priceRange &&
    product.pricing.priceRange.start
      ? product.pricing.priceRange.start
      : undefined;

  const [hover, setHover] = React.useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <S.Wrapper onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <S.Title>{product.name}</S.Title>
      <S.Price>
        <TaxedMoney taxedMoney={price} />
      </S.Price>
      <S.Image>
        <Thumbnail source={product} />
      </S.Image>
      <S.AddToWishlist show={hover}>
        <AddToWishlist productId={product.id} showButtonText={false} />
      </S.AddToWishlist>
    </S.Wrapper>
  );
};
