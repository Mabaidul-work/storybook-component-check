"use client";

import {
  Box,
  Button,
  ButtonWithIcon,
  Container,
  CopyRight,
  Divider,
  Input,
  ProgressBar,
  SearchInput,
  Stack,
  Typography,
} from "appscrip-designkit";
import React from "react";
import { AiFillAudio } from "react-icons/ai";

const Atoms = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* Typography Check  */}
      <Typography as="h2" className="text-center text-yellow-600" variant="h2">
        Typography Check
      </Typography>
      <Divider />
      <Box className="flex flex-col gap-4">
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          labore sequi maiores accusamus earum ipsa quibusdam autem, vitae
          cupiditate maxime porro minus ea non, natus impedit iusto? Facere,
          obcaecati earum?{" "}
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

        <Typography
          className="text-center"
          as="p"
          fontWeight="default"
          underline
        >
          Typography Check For underline true
        </Typography>

        <Typography
          className="text-center underline"
          as="p"
          fontWeight="default"
        >
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
      </Box>

      {/* Buttons Check  */}
      <Typography as="h2" className="text-center text-yellow-600" variant="h2">
        Buttons Check
      </Typography>
      <Divider />
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

      {/* ButtonWithIcon Check */}
      <Typography as="h2" className="text-center text-yellow-600" variant="h2">
        ButtonWithIcon Check
      </Typography>
      <Divider />
      <Box className="flex flex-col items-center justify-center gap-4">
        <ButtonWithIcon icon={<AiFillAudio />}>ButtonWithIcon</ButtonWithIcon>
        <ButtonWithIcon icon={<AiFillAudio />} iconPosition="right">
          IconPosition right
        </ButtonWithIcon>
        <ButtonWithIcon icon={<AiFillAudio />} iconPosition="left">
          IconPosition left
        </ButtonWithIcon>
        <ButtonWithIcon icon={<AiFillAudio />} iconPosition="left" size="sm">
          ButtonWithIcon size sm
        </ButtonWithIcon>
        <ButtonWithIcon icon={<AiFillAudio />} size="lg">
          ButtonWithIcon size lg
        </ButtonWithIcon>

        <ButtonWithIcon icon={<AiFillAudio />} iconClassName="text-red-500">
          Icon color change
        </ButtonWithIcon>

        <ButtonWithIcon icon={<AiFillAudio />} className="gap-0">
          Gap change
        </ButtonWithIcon>
        <ButtonWithIcon icon={<AiFillAudio />} variant="solid">
          Variant solid
        </ButtonWithIcon>
        <ButtonWithIcon icon={<AiFillAudio />} variant="outline">
          Variant outline
        </ButtonWithIcon>
        <ButtonWithIcon icon={<AiFillAudio />} variant="ghost">
          Variant ghost
        </ButtonWithIcon>

        <ButtonWithIcon
          icon={<AiFillAudio />}
          onClick={() => console.log("clicked")}
        >
          check onclick
        </ButtonWithIcon>
      </Box>

      {/* Input Check */}
      <Typography as="h2" className="text-center text-yellow-600" variant="h2">
        Input Check
      </Typography>
      <Divider />
      <Stack className="items-center justify-center gap-4">
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
          Range Input Check{" "}
          <Input
            id="range-input-check"
            placeholder="range Input Check"
            type="range"
            className="w-fit ml-3 px-0 py-0"
          />
        </label>

        <label htmlFor="borderless-input" className="flex items-center gap-2">
          Borderless Input Check
          <Input
            id="borderless-input"
            placeholder="borderless input"
            type="text"
            variant={"borderless"}
          />
        </label>
        <label htmlFor="borderless-input" className="flex items-center gap-2">
          Borderless Input customization
          <Input
            id="borderless-input"
            placeholder="borderless input"
            type="text"
            variant={"borderless"}
            className="bg-gray-300 text-black"
          />
        </label>
      </Stack>

      {/* Stack Check */}
      <Typography as="h2" className="text-center text-yellow-600" variant="h2">
        Stack Check
      </Typography>
      <Divider />
      <Box className="flex flex-col items-center justify-center gap-4">
        <Stack>
          <Typography>default behavior</Typography>
          <Typography>alignItems center</Typography>
          <Typography>justifyContent center</Typography>
        </Stack>

        <Stack className="gap-4">
          <Typography>gap 4</Typography>
          <Typography>alignItems center</Typography>
          <Typography>justifyContent center</Typography>
        </Stack>

        <Stack
          className="gap-4"
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Typography>direction row</Typography>
          <Typography>alignItems center</Typography>
          <Typography>justifyContent center</Typography>
        </Stack>
      </Box>

      {/* Container Check */}
      <Typography as="h2" className="text-center text-yellow-600" variant="h2">
        Container Check
      </Typography>
      <Divider />
      <Box className="flex flex-col items-center justify-center gap-4">
        <Container>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          beatae placeat temporibus qui fugiat assumenda sint corrupti minima ab
          quia! Consequatur quasi animi sapiente, neque excepturi quibusdam?
          Harum aliquam reiciendis repellendus ratione? Unde, voluptatem ratione
          eligendi eum error dicta nulla molestiae debitis dolorum! Fugit
          mollitia quisquam assumenda modi consequatur obcaecati a animi, ex
          voluptas officiis quas! Quae cumque optio suscipit consequuntur vitae
          nesciunt cum iure beatae eaque doloribus adipisci rerum recusandae
          repellat, placeat quos vero dolorem accusantium laboriosam amet? Sit
          quod sint sapiente placeat. Beatae aliquid nobis, iure quasi nisi
          corporis. Sunt, quos suscipit? Laudantium molestiae in eos eaque
          ratione quasi sequi qui odit nobis. Excepturi ducimus eaque
          praesentium possimus consequuntur eligendi! Perferendis, consequuntur
          labore iusto, natus asperiores doloribus id est eum error fugiat
          optio, facere ea. Delectus praesentium veritatis mollitia amet quo
          numquam quaerat pariatur. Quaerat labore culpa esse blanditiis, fugiat
          eos saepe quae cupiditate inventore a quam reprehenderit nobis itaque
          optio aliquid quis nemo. Consectetur enim eos, eveniet consequuntur
          numquam error quisquam sint. Reprehenderit magni, dolorem mollitia
          aliquid itaque perspiciatis, esse ratione dolores aspernatur ut dicta
          nemo odio, praesentium dignissimos voluptatem quidem expedita deleniti
          ea incidunt voluptate! Dolores quae inventore repellat adipisci odio
          iusto ut maiores placeat nisi.
        </Container>
      </Box>

      {/* CopyRight Check */}
      <Typography as="h2" className="text-center text-yellow-600" variant="h2">
        CopyRight Check
      </Typography>
      <Divider />
      <Box className="flex flex-col items-center justify-center gap-4">
        <CopyRight copyrightText="Copyright 2024" />
      </Box>

      {/* Divider Check */}
      <Typography as="h2" className="text-center text-yellow-600" variant="h2">
        Divider Check
      </Typography>
      <Divider />

      <Box className="flex flex-col items-center justify-center gap-4">
        <Divider />
        <Divider variant="vertical" />
      </Box>

      {/* SearchInput Check */}
      <Typography as="h2" className="text-center text-yellow-600" variant="h2">
        SearchInput Check
      </Typography>
      <Divider />

      <Box className="flex flex-col items-center justify-center gap-4">
        <label htmlFor="search-input-check">
          SearchInput Check
          <SearchInput id="search-input-check" />
        </label>
        <label htmlFor="search-input-check">
          Icon Customization
          <SearchInput id="search-input-check" icon={<AiFillAudio />} />
        </label>
        <label htmlFor="search-input-check">
          Icon Position Right
          <SearchInput
            id="search-input-check"
            showIcon={false}
            inputClassName="pl-0"
          />
        </label>
      </Box>

      {/* ProgressBar Check */}
      <Typography as="h2" className="text-center text-yellow-600" variant="h2">
        ProgressBar Check
      </Typography>
      <Divider />
      <Box className="flex flex-col items-center justify-center gap-4">
        <Stack className="w-72 gap-10">
          <ProgressBar percentage={50} />
          <ProgressBar
            percentage={50}
            remainingPercentageColor="gray"
            color="green"
          />

          <ProgressBar
            percentage={30}
            progressBarHeight="20px"
            className="rouned-full"
          />
        </Stack>
      </Box>

      <Typography
        as="h2"
        className="text-center text-yellow-600 mt-32"
        variant="h2"
      >
        Footer
      </Typography>
    </div>
  );
};

export default Atoms;
