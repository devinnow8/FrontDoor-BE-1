import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UsersService } from "./users.service";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  //creating the table for the user
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  //fetching all the details of the user
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  //fetching all the details of the given id
  @Get(":id")
  findById(@Param("id") id: string) {
    return this.usersService.findById(id);
  }

  //updating the details of the given id
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  //deleting the given id
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.usersService.remove(id);
  }
}
