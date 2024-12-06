import { Box, Button, Input, Typography } from "appscrip-designkit";
import React from "react";

const Atoms = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* Typography Check  */}
      <Typography as="h1" variant="h1" className="text-center">
        Typography Check For h1
      </Typography>

      <Typography as="h2" variant="h2" className="text-center">
        Typography Check For h2
      </Typography>

      <Typography as="h3" variant="h3" className="text-center">
        Typography Check For h3
      </Typography>

      <Typography as="h4" variant="h4" className="text-center">
        Typography Check For h4
      </Typography>

      <Typography as="h5" variant="h5" className="text-center">
        Typography Check For h5
      </Typography>

      <Typography as="h6" variant="h6" className="text-center">
        Typography Check For h6
      </Typography>

      <Typography as="p" className="text-center">
        Typography Check For p
      </Typography>

      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti labore
        sequi maiores accusamus earum ipsa quibusdam autem, vitae cupiditate
        maxime porro minus ea non, natus impedit iusto? Facere, obcaecati earum?{" "}
        <Typography as="span" className="text-center font-bold">
          Typography Check For span
        </Typography>
      </Typography>

      <Typography className="text-center" as="p" fontWeight="default">
        Typography Check For fontWeight default
      </Typography>

      <Typography className="text-center" as="p" fontWeight="heading">
        Typography Check For fontWeight heading
      </Typography>

      <Typography className="text-center" as="p" fontWeight="default" underline>
        Typography Check For underline true
      </Typography>

      <Typography className="text-center underline" as="p" fontWeight="default">
        Typography Check For fontWeight default
      </Typography>
      {/* check for emphasis */}
      <Typography className="text-center" as="p" emphasis="low">
        Typography Check For Emphasis low
      </Typography>
      {/* check for fontOverflow ellipsis */}
      <div className="flex items-center justify-center">
        <Typography className="text-center" as="p" fontOverflow="ellipsis">
          Typography Check For fontOverflow ellipsis
        </Typography>
      </div>

      {/* check for fontOverflow clip */}
      <div className="flex items-center justify-center">
        <Typography className="text-center" as="p" fontOverflow="clip">
          Typography Check For fontOverflow clip
        </Typography>
      </div>

      {/* Button Check  */}
      <Box className="flex justify-center items-center flex-col gap-4">
        <Button className="w-fit">Button Check as default</Button>

        <Button variant="ghost" className="w-fit">
          Button Check as ghost
        </Button>
        <Button variant="outline" className="w-fit">
          Button Check as outline
        </Button>
        <Button variant="solid" className="w-fit">
          Button Check as solid
        </Button>

        <Button className="w-fit" disabled>
          Button Check as disabled
        </Button>
        <Button className="w-fit" size="sm">
          Button Check as size sm
        </Button>
        <Button className="w-fit" size="md">
          Button Check as size md
        </Button>
        <Button className="w-fit" size="lg">
          Button Check as size lg
        </Button>

        <Button className="w-fit" textColor="primary">
          Button Check as textColor primary
        </Button>
        <Button className="w-fit" textColor="secondary">
          Button Check as textColor secondary
        </Button>

        {/* check for type submit */}
        <Button className="w-fit" type="submit">
          Button Check as type submit
        </Button>
      </Box>

      <Box className="flex flex-col items-center justify-center gap-4">
        <label htmlFor="text-input-check">
          Input Check{" "}
          <Input
            id="text-input-check"
            placeholder="text Input Check"
            type="text"
            className="w-fit ml-3"
          />
        </label>
        <label htmlFor="number-input-check">
          Input Check{" "}
          <Input
            id="number-input-check"
            placeholder="number Input Check"
            type="number"
            className="w-fit ml-3"
          />
        </label>

        <label htmlFor="password-input-check">
          Input Check{" "}
          <Input
            id="password-input-check"
            placeholder="password Input Check"
            type="password"
            className="w-fit ml-3"
          />
        </label>

        <label htmlFor="email-input-check">
          Input Check{" "}
          <Input
            id="email-input-check"
            placeholder="email Input Check"
            type="email"
            className="w-fit ml-3"
            required
          />
        </label>
        <label htmlFor="radio-input-check">
          Input Check{" "}
          <Input
            id="radio-input-check"
            placeholder="radio Input Check"
            type="radio"
            className="w-fit ml-3"
          />
        </label>
        <label htmlFor="checkbox-input-check">
          Input Check{" "}
          <Input
            id="checkbox-input-check"
            placeholder="checkbox Input Check"
            type="checkbox"
            className="w-fit ml-3"
          />
        </label>
        <label
          htmlFor="range-input-check"
          className="flex items-center justify-center"
        >
          Input Check{" "}
          <Input
            id="range-input-check"
            placeholder="range Input Check"
            type="range"
            className="w-fit ml-3"
          />
        </label>
      </Box>
    </div>
  );
};

export default Atoms;
