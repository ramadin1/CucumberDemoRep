package com.cumcumber.testing;

import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;


@SuppressWarnings("deprecation")
@RunWith(Cucumber.class)
@Cucumber.Options(format={"html:output"})
public class RunCukesTest {
}