// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: owVdPvEphTbmsFvPUSwECY
// Component: 38wpV2hoT24T
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import LinkButton from "../../LinkButton"; // plasmic-import: 7slIBzoAypY33D/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_furn_e_commerce.module.css"; // plasmic-import: owVdPvEphTbmsFvPUSwECY/projectcss
import * as sty from "./PlasmicProductCarousel.module.css"; // plasmic-import: 38wpV2hoT24T/css
import DotCircleOIcon from "./icons/PlasmicIcon__DotCircleO"; // plasmic-import: FrPxFeCIl-K3h/icon
import CircleOIcon from "./icons/PlasmicIcon__CircleO"; // plasmic-import: hfxlc_0zvAiAa/icon
import slider1RT1LSSzYdQil from "./images/slider1.png"; // plasmic-import: rT_1lSSzYdQil/picture
import slider2PrfsvGpGrMBlz from "./images/slider2.png"; // plasmic-import: PRFSVGpGrMBlz/picture
import slider3NkjYhdrziCfhp from "./images/slider3.png"; // plasmic-import: nkjYhdrziCFHP/picture

export const PlasmicProductCarousel__VariantProps = new Array("slider");

export const PlasmicProductCarousel__ArgProps = new Array();

function PlasmicProductCarousel__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <div className={classNames(defaultcss.all, sty.box__dyqw4)}>
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.box__yh8QQ, {
            [sty.box__slider_second__yh8QQxT6Ye]: hasVariant(
              variants,
              "slider",
              "second"
            )
          })}
        >
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box__wfKyq
            )}
          >
            {"Great Design Collection"}
          </div>

          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box__jyBai,
              {
                [sty.box__slider_first__jyBaiyKn9O]: hasVariant(
                  variants,
                  "slider",
                  "first"
                ),

                [sty.box__slider_second__jyBaIxT6Ye]: hasVariant(
                  variants,
                  "slider",
                  "second"
                ),

                [sty.box__slider_third__jyBaiCmSct]: hasVariant(
                  variants,
                  "slider",
                  "third"
                )
              }
            )}
          >
            {hasVariant(variants, "slider", "third")
              ? "Valvet Accent Arm Chair"
              : hasVariant(variants, "slider", "second")
              ? "Mapple Wood Accent Chair"
              : "Cloth Covered Accent Chair"}
          </div>

          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box__q7PiL
            )}
          >
            {
              "Lorem ipsum dolor sit amet consectetur adipisicing elit nemo expedita voluptas culpa sapiente."
            }
          </div>

          <div className={classNames(defaultcss.all, sty.box__ax7Yw)}>
            <div className={classNames(defaultcss.all, sty.box__wybS)} />

            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box__k8QkF,
                {
                  [sty.box__slider_second__k8QkFxT6Ye]: hasVariant(
                    variants,
                    "slider",
                    "second"
                  ),

                  [sty.box__slider_third__k8QkFCmSct]: hasVariant(
                    variants,
                    "slider",
                    "third"
                  )
                }
              )}
            >
              {hasVariant(variants, "slider", "third")
                ? " $299.00"
                : hasVariant(variants, "slider", "second")
                ? " $199.00"
                : " $399.00"}
            </div>

            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box___77NcD,
                {
                  [sty.box__slider_first___77NcDyKn9O]: hasVariant(
                    variants,
                    "slider",
                    "first"
                  ),

                  [sty.box__slider_second___77NcDxT6Ye]: hasVariant(
                    variants,
                    "slider",
                    "second"
                  ),

                  [sty.box__slider_third___77NcDCmSct]: hasVariant(
                    variants,
                    "slider",
                    "third"
                  )
                }
              )}
            >
              {hasVariant(variants, "slider", "third")
                ? " $399.00"
                : hasVariant(variants, "slider", "second")
                ? " $299.00"
                : " $499.00"}
            </div>
          </div>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.box__npBcU)}
          >
            <LinkButton
              className={classNames("__wab_instance", sty.linkButton___8DdpW)}
              text={"??? Add to cart"}
              type={"solidOrange"}
            />

            <LinkButton
              className={classNames("__wab_instance", sty.linkButton__t2Wud)}
              text={"More Info"}
              type={"blankOrange"}
            />
          </p.Stack>
        </p.Stack>

        <div className={classNames(defaultcss.all, sty.box___2SGyr)}>
          <img
            data-plasmic-name={"img"}
            data-plasmic-override={overrides.img}
            alt={""}
            className={classNames(defaultcss.img, sty.img, {
              [sty.img__slider_first]: hasVariant(variants, "slider", "first"),
              [sty.img__slider_second]: hasVariant(
                variants,
                "slider",
                "second"
              ),

              [sty.img__slider_third]: hasVariant(variants, "slider", "third")
            })}
            height={
              hasVariant(variants, "slider", "third")
                ? 475
                : hasVariant(variants, "slider", "second")
                ? 559
                : 549
            }
            role={"img"}
            src={
              hasVariant(variants, "slider", "third")
                ? slider3NkjYhdrziCfhp
                : hasVariant(variants, "slider", "second")
                ? slider2PrfsvGpGrMBlz
                : slider1RT1LSSzYdQil
            }
            width={
              hasVariant(variants, "slider", "third")
                ? 553
                : hasVariant(variants, "slider", "second")
                ? 528
                : 507
            }
          />
        </div>
      </div>

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.box__v4I8)}
      >
        <p.PlasmicIcon
          PlasmicIconType={
            hasVariant(variants, "slider", "third")
              ? CircleOIcon
              : hasVariant(variants, "slider", "second")
              ? CircleOIcon
              : DotCircleOIcon
          }
          className={classNames(defaultcss.all, sty.svg___3L04J, {
            [sty.svg__slider_second___3L04JxT6Ye]: hasVariant(
              variants,
              "slider",
              "second"
            ),

            [sty.svg__slider_third___3L04JCmSct]: hasVariant(
              variants,
              "slider",
              "third"
            )
          })}
          role={"img"}
        />

        <p.PlasmicIcon
          PlasmicIconType={
            hasVariant(variants, "slider", "second")
              ? DotCircleOIcon
              : CircleOIcon
          }
          className={classNames(defaultcss.all, sty.svg___4BaQk, {
            [sty.svg__slider_first___4BaQkYKn9O]: hasVariant(
              variants,
              "slider",
              "first"
            ),

            [sty.svg__slider_second___4BaQkxT6Ye]: hasVariant(
              variants,
              "slider",
              "second"
            ),

            [sty.svg__slider_third___4BaQkCmSct]: hasVariant(
              variants,
              "slider",
              "third"
            )
          })}
          role={"img"}
        />

        <p.PlasmicIcon
          PlasmicIconType={
            hasVariant(variants, "slider", "third")
              ? DotCircleOIcon
              : CircleOIcon
          }
          className={classNames(defaultcss.all, sty.svg__rIlIj, {
            [sty.svg__slider_third__rIlIjCmSct]: hasVariant(
              variants,
              "slider",
              "third"
            )
          })}
          role={"img"}
        />
      </p.Stack>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "img"],
  img: ["img"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicProductCarousel__ArgProps,
      internalVariantPropNames: PlasmicProductCarousel__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicProductCarousel__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicProductCarousel";
  } else {
    func.displayName = `PlasmicProductCarousel.${nodeName}`;
  }
  return func;
}

export const PlasmicProductCarousel = Object.assign(
  // Top-level PlasmicProductCarousel renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    // Metadata about props expected for PlasmicProductCarousel
    internalVariantProps: PlasmicProductCarousel__VariantProps,
    internalArgProps: PlasmicProductCarousel__ArgProps
  }
);

export default PlasmicProductCarousel;
/* prettier-ignore-end */
