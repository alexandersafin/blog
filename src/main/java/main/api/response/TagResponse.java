package main.api.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@Data
@AllArgsConstructor
@RequiredArgsConstructor
@Component
public class TagResponse {
    private List<Tags> tags;

    @Data
    @AllArgsConstructor
    @RequiredArgsConstructor
    public static class Tags {
        private String name;
        private double weight;
    }
}
