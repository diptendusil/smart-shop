//package org.cognizant.product.mappers;
//
//import org.cognizant.product.dto.CategoryDto;
//import org.cognizant.product.entities.Category;
//import org.mapstruct.Mapper;
//import org.mapstruct.ReportingPolicy;
//import org.springframework.stereotype.Component;
//
//@Component
//@Mapper(componentModel = "spring", uses = {}, unmappedTargetPolicy=ReportingPolicy.IGNORE)
//public interface CategoryMapper extends EntityMapper<CategoryDto,Category> {
//	
//	CategoryDto toDto(Category category);
//	
//	Category toEntity(CategoryDto categoryDto);
//	
//	default Category fromId(int id) {
//		if(id==0)
//			return null;
//		Category category=new Category();
//		category.setCategoryId(id);
//		return category;
//	}
//
//}
