import { Controller, Get, Post,Put, Param, Body, Query } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';

@Controller('ninjas')
export class NinjasController {
  @Get()
  getAllNinjas(@Query('type') type: string) {
    return [{ type }];
  }

  @Get(':id')
  getOneNinja(@Param('id') id: string) {
    return {};
  }

  @Post()
  addNinja(@Body() createNinjaDto: CreateNinjaDto) {
    return { name: createNinjaDto.name };
  }

  @Put()
  updateNinja(@Param('id') id:string ,@Body() updateNinjaDto: UpdateNinjaDto){
    return {
        id,
        name: updateNinjaDto,
    }
  }
}
