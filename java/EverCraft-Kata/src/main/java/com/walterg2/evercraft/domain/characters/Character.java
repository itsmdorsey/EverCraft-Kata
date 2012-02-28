/**
 * 
 */
package com.walterg2.evercraft.domain.characters;

/**
 * @author walterg2
 *
 */
public class Character {
	
	private String name;
	private String alignment;
	
	public Character(String name, String alignment) {
		this.name = name;
		this.alignment = alignment;
	}

	/**
	 * @return the name
	 */
	public String getName() {
		return name;
	}

	/**
	 * @return the alignment
	 */
	public String getAlignment() {
		return alignment;
	}

}